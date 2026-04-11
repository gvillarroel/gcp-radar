---
title: "Naming service ports \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.20/docs/naming-service-ports
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.20/docs/naming-service-ports
  title: "Naming service ports \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing legacy v1.20 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.20
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Naming service ports
To be included in Cloud Service Mesh, service ports must be named, and the name must
include the port's protocol, for example:
apiVersion: v1
kind: Service
metadata:
name: ratings
labels:
app: ratings
service: ratings
spec:
ports:
- port: 9080
name: http
The service port name can include a suffix in the following syntax:
name: protocol [- suffix ]
where the square brackets indicate an optional suffix that must start with a
dash, for example:
kind: Service
metadata:
name: myservice
spec:
ports:
- number: 3306
name: mysql
- number: 80
name: http-web
For metrics to be displayed in the Google Cloud console, the service ports
must be named with one of the following protocols: http , http2 , or grpc .
Service ports named with the https protocol are treated as tcp , and metrics
aren't displayed for those services.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
