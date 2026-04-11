---
title: "Package cloud_filestore_manager (1.16.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/file/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.services.cloud_filestore_manager
  title: "Package cloud_filestore_manager (1.16.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Package cloud_filestore_manager (1.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.0 (latest)
1.15.0
1.14.0
1.13.2
1.12.0
1.11.0
1.10.1
1.9.5
1.8.0
1.7.0
1.6.2
1.5.1
1.4.1
1.3.0
1.2.3
1.1.3
1.0.0
0.2.3
0.1.0
API documentation for filestore_v1.services.cloud_filestore_manager package.
Classes
CloudFilestoreManagerAsyncClient
Configures and manages Filestore resources.
Filestore Manager v1.
The file.googleapis.com service implements the Filestore API and
defines the following resource model for managing instances:
The service works with a collection of cloud projects, named:
/projects/*
Each project has a collection of available locations, named:
/locations/*
Each location has a collection of instances and backups, named:
/instances/* and /backups/* respectively.
As such, Filestore instances are resources of the form:
/projects/{project_number}/locations/{location_id}/instances/{instance_id}
and backups are resources of the form:
/projects/{project_number}/locations/{location_id}/backup/{backup_id}
Note that location_id must be a Google Cloud zone for instances,
but a Google Cloud region for backups; for example:
projects/12345/locations/us-central1-c/instances/my-filestore
projects/12345/locations/us-central1/backups/my-backup
CloudFilestoreManagerClient
Configures and manages Filestore resources.
Filestore Manager v1.
The file.googleapis.com service implements the Filestore API and
defines the following resource model for managing instances:
The service works with a collection of cloud projects, named:
/projects/*
Each project has a collection of available locations, named:
/locations/*
Each location has a collection of instances and backups, named:
/instances/* and /backups/* respectively.
As such, Filestore instances are resources of the form:
/projects/{project_number}/locations/{location_id}/instances/{instance_id}
and backups are resources of the form:
/projects/{project_number}/locations/{location_id}/backup/{backup_id}
Note that location_id must be a Google Cloud zone for instances,
but a Google Cloud region for backups; for example:
projects/12345/locations/us-central1-c/instances/my-filestore
projects/12345/locations/us-central1/backups/my-backup
Modules
pagers
API documentation for filestore_v1.services.cloud_filestore_manager.pagers module.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
