---
title: "GCPDataSource \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/gcpdatasource
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/gcpdatasource
  title: "GCPDataSource \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
GCPDataSource
Stay organized with collections
Save and categorize content based on your preferences.
Custom Resource Definition Properties
Spec
Schema
cloudStorage :
serviceAccountName : string
uri : string
Fields
cloudStorage
object
CloudStorage is the property for the Cloud Storage data source information.
cloudStorage.serviceAccountName
string
ServiceAccountName is the name of the service account that will be used to authenticate access to the Cloud Storage bucket. This service account must have permission to read the data source.
cloudStorage.uri
string
URI is the URI of the Cloud Storage data source from which the data will be transferred from.
This should be a gs:// URI, for example: gs://my-bucket/my-data/
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
