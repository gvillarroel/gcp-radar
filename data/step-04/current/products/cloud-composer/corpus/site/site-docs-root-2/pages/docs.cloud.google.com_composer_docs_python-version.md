---
title: "Supported Python versions \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/python-version
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-versions
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/python-version
  title: "Supported Python versions \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Resources
Send feedback
Supported Python versions
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer supports Python 3.
To see the major.minor.patch versions of Python 3 used in a
specific Cloud Composer image, see
Cloud Composer version list .
After an environment is created, you cannot switch an existing
environment to a different minor Python version.
Python 2 support in Cloud Composer 1
Support for Python 2 was deprecated in Cloud Composer
version 1.19.0:
Starting from version 1.19.0, it is not possible to create new environments
with Python 2, or upgrade existing environments with Python 2 to 1.19.0
and later versions of Cloud Composer.
Starting from version 1.19.6, it is no longer possible to use any operators
that call Python 2. In particular, PythonVirtualenvOperator can no
longer create virtual environments with Python 2.
Existing environments with Python 2 are not impacted by this change. It is
possible to upgrade such environments to Cloud Composer version 1.18.12
and earlier through gcloud CLI, API, and Terraform.
New Airflow operators, sensors, and hooks are only developed for
Python 3, which may cause connectivity options to be outdated for Python 2
environments. As such, we highly recommend migrating your DAGs to a
Python 3 environment, and creating all new environments with Python 3.
Note: If you want to continue using Python 2, note that samples located in
python-docs-samples
are no longer checked for compatibility with Python 2.7.
What's next
Creating environments
Cloud Composer version list
Release Notes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
