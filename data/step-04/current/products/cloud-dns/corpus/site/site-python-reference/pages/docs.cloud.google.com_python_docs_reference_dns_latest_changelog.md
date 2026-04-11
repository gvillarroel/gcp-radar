---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dns/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dns/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dns/latest/changelog
  title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Changelog
Stay organized with collections
Save and categorize content based on your preferences.
0.36.1 (latest)
0.36.0
0.35.1
0.34.2
0.33.1
0.32.3
0.31.0
0.30.2
PyPI History
0.36.1 (2026-03-26)
Bug Fixes
Allow Protobuf 7.x, require Python 3.9 (#16102) ( ec9262c45055d3d2b596cdde1649d3ce90b4347d )
Require Python 3.9 ( ec9262c45055d3d2b596cdde1649d3ce90b4347d )
0.36.0 (2025-11-05)
Features
Add support for Python 3.14 ( #321 ) ( 99c0adb )
Adds Python 3.13 support ( #319 ) ( ea851ce )
0.35.1 (2025-04-25)
Bug Fixes
Remove setup.cfg configuration for creating universal wheels ( #316 ) ( 942de3a )
Resolve issues where pre-release versions of dependencies are installed ( #313 ) ( 5e1a6bc )
0.35.0 (2023-11-30)
Features
Add support for Python 3.12 ( #233 ) ( 2e60d57 )
Introduce compatibility with native namespace packages ( #232 ) ( 8e9f0be )
0.34.2 (2023-11-09)
Bug Fixes
deps: Remove dependency on package “six” ( #226 ) ( 77a6545 )
0.34.1 (2022-07-14)
Bug Fixes
require python 3.7+ ( #163 ) ( 6882da5 )
0.34.0 (2021-10-08)
Features
add support for Python 3.10 ( #121 ) ( af8be30 )
0.33.1 (2021-09-20)
Bug Fixes
remove six ( #115 ) ( 95f94ef )
0.33.0 (2021-07-23)
Features
require python 3.6 ( #61 ) ( 56ab29f )
0.32.3 (2021-05-27)
Bug Fixes
require google-cloud-core >= 1.3.0 ( #38 ) ( 3ba0456 )
0.32.2 (2021-02-11)
Documentation
python: update intersphinx for grpc and auth ( #30 ) ( 142d2e7 )
0.32.1 (2020-10-12)
Bug Fixes
fix client.quotas() method ( #24 ) ( 9d97955 )
Documentation
remove samples in library docs ( #17 ) ( 51d4d10 )
update README.rst ( #25 ) ( 3e511cb )
0.32.0 (2020-02-11)
Features
dns: add ‘client_options’ argument to client ctor ( #9516 ) ( ab31add ), closes #8475
Bug Fixes
dns: update test assertion and core version pins ( #10096 ) ( b6e7b49 )
0.31.0
10-15-2019 06:42 PDT
Dependencies
Pin ‘google-cloud-core >= 1.0.3, < 2.0.0dev’. ( #9445 )
Documentation
Fix intersphinx reference to requests . ( #9294 )
Fix broken links in docs. ( #9148 )
Remove CI for gh-pages, use googleapis.dev for api_core refs. ( #9085 )
Remove compatability badges from READMEs. ( #9035 )
Update intersphinx mapping for requests. ( #8805 )
Link to googleapis.dev documentation in READMEs. ( #8705 )
0.30.2
07-11-2019 10:09 PDT
Implementation Changes
Change base url to dns.googleapis.com ( #8641 )
Internal / Testing Changes
Add nox session ‘docs’ to remaining manual clients. ( #8478 )
Add docs job to publish to googleapis.dev. ( #8464 )
0.30.1
06-04-2019 11:13 PDT
Dependencies
Don’t pin ‘google-api-core’ in libs using ‘google-cloud-core’. ( #8213 )
0.30.0
05-16-2019 12:23 PDT
Implementation Changes
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
New Features
Add client_info support to client / connection. ( #7869 )
Dependencies
Pin google-cloud-core >= 1.0.0, < 2.0dev . ( #7993 )
Documentation
Update client library documentation URLs. ( #7307 )
0.29.2
12-17-2018 16:47 PST
Implementation Changes
Ensure that ManagedZone:exists() does not misreport True result. ( #6884 )
Documentation
Document Python 2 deprecation ( #6910 )
Docs/fixit: normalize docs for page_size / max_results / page_token ( #6842 )
0.29.1
12-10-2018 12:50 PST
Dependencies
Update dependency to google-cloud-core ( #6835 )
Bump minimum api_core version for all GAPIC libs to 1.4.1. ( #6391 )
Documentation
Fix ‘Datastore’ in text as well as examples / links
Internal / Testing Changes
Add blacken to noxfile ( #6795 )
Blackening Continued… ( #6667 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
Docs: normalize use of support level badges ( #6159 )
Add / fix badges for PyPI / versions. ( #6158 )
Fix copy-pasta from datastore README. ( #6208 )
Use new Nox ( #6175 )
Prep dns docs for repo split. ( #6020 )
Nox: use inplace installs ( #5865 )
Add Test runs for Python 3.7 and remove 3.4 ( #5295 )
Fix bad trove classifier
0.29.0
Implementation changes
Renaming makeResource -> make_resource . (#4355)
Dependencies
Update dependency range for api-core to include v1.0.0 releases (#4944)
Documentation
Fixing “Fore” -> “For” typo in README docs. (#4317)
Testing and internal changes
Install local dependencies when running lint (#4936)
Re-enable lint for tests, remove usage of pylint (#4921)
Normalize all setup.py files (#4909)
Making a nox -s default session for all packages. (#4324)
Shorten test names (#4321)
0.28.0
Documentation
Added link to “Python Development Environment Setup Guide” in
project README (#4187, h/t to @michaelawyu)
Dependencies
Upgrading to google-cloud-core >= 0.28.0 and adding dependency
on google-api-core (#4221, #4280)
PyPI: https://pypi.org/project/google-cloud-dns/0.28.0/
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
