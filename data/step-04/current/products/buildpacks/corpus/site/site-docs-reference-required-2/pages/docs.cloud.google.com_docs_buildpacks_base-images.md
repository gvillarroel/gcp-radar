---
title: "Base images \_|\_ Buildpacks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/buildpacks/base-images
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/docs/buildpacks/go
source_metadata:
  url: https://docs.cloud.google.com/docs/buildpacks/base-images
  title: "Base images \_|\_ Buildpacks \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Buildpacks
Guides
Send feedback
Base images
Stay organized with collections
Save and categorize content based on your preferences.
A base image is the starting point for most container-based development workflows.
Developers start with a base image and layer on top of it the necessary libraries,
binaries, and configuration files used to run their application. Google Cloud's buildpacks
publishes base images with multiple configurations of the available system packages and languages.
Security and maintenance updates to these base images are made available through
routine updates. Google Cloud's buildpacks applies these updates automatically or
lets you manually update, depending on the environment and your configuration.
For example, Cloud Run functions supports automatic updates .
Base images are hosted in every region where Artifact Registry is available.
You can customize the base image path by replacing the first portion of the URI
with your region of choice:
REGION -docker.pkg.dev/serverless-runtimes/ STACK /runtimes/ RUNTIME_ID
Replace:
REGION with the preferred region, for example us-central1 .
STACK with the preferred operating system stack, for example google-24 .
RUNTIME_ID with the runtime ID used by your function, for example python313 .
For example, buildpacks references the Node.js 24 base image using the google-24 stack,
hosted in us-central1 with the following URL:
us-central1-docker.pkg.dev/serverless-runtimes/google-24/runtimes/nodejs24 .
Node.js
Runtime
Generation
Environment
Runtime ID
Node.js 24
2nd gen
Ubuntu 24.04
nodejs24
Node.js 22
1st gen, 2nd gen
Ubuntu 22.04
nodejs22
Node.js 20
1st gen, 2nd gen
Ubuntu 22.04
nodejs20
Node.js 18
1st gen, 2nd gen
Ubuntu 22.04
nodejs18
Node.js 16
1st gen, 2nd gen
Ubuntu 18.04
nodejs16
Node.js 14
1st gen, 2nd gen
Ubuntu 18.04
nodejs14
Node.js 12
1st gen, 2nd gen
Ubuntu 18.04
nodejs12
Node.js 10
1st gen, 2nd gen
Ubuntu 18.04
nodejs10
Node.js 8
1st gen, 2nd gen
Ubuntu 18.04
nodejs8
Node.js 6
1st gen, 2nd gen
Ubuntu 18.04
nodejs6
Python
Runtime
Generation
Environment
Runtime ID
Python 3.14
2nd gen
Ubuntu 24.04
python314
Python 3.13
2nd gen
Ubuntu 22.04
python313
Python 3.12
1st gen, 2nd gen
Ubuntu 22.04
python312
Python 3.11
1st gen, 2nd gen
Ubuntu 22.04
python311
Python 3.10
1st gen, 2nd gen
Ubuntu 22.04
python310
Python 3.9
1st gen, 2nd gen
Ubuntu 18.04
python39
Python 3.8
1st gen, 2nd gen
Ubuntu 18.04
python38
Python 3.7
1st gen
Ubuntu 18.04
python37
Go
Runtime
Generation
Environment
Runtime ID
Go 1.26
2nd gen
Ubuntu 24.04
go126
Go 1.25
2nd gen
Ubuntu 22.04
go125
Go 1.24
2nd gen
Ubuntu 22.04
go124
Go 1.23
2nd gen
Ubuntu 22.04
go123
Go 1.22
2nd gen
Ubuntu 22.04
go122
Go 1.21
1st gen, 2nd gen
Ubuntu 22.04
go121
Go 1.20
1st gen, 2nd gen
Ubuntu 22.04
go120
Go 1.19
1st gen, 2nd gen
Ubuntu 22.04
go119
Go 1.18
1st gen, 2nd gen
Ubuntu 22.04
go118
Go 1.16
1st gen, 2nd gen
Ubuntu 18.04
go116
Go 1.13
1st gen, 2nd gen
Ubuntu 18.04
go113
Go 1.11
1st gen, 2nd gen
Ubuntu 18.04
go111
Note: Go's release policy states
that each major Go release is supported until there are two newer major releases. Key dates
might not be available until newer versions of Go are made publicly available.
Java
Runtime
Generation
Environment
Runtime ID
Java 25
2nd gen
Ubuntu 24.04
java25
Java 21
2nd gen
Ubuntu 22.04
java21
Java 17
1st gen, 2nd gen
Ubuntu 22.04
java17
Java 11
1st gen, 2nd gen
Ubuntu 18.04
java11
Ruby
Runtime
Generation
Environment
Runtime ID
Ruby 4.0
2nd gen
Ubuntu 24.04
ruby40
Ruby 3.4
2nd gen
Ubuntu 22.04
ruby34
Ruby 3.3
1st gen, 2nd gen
Ubuntu 22.04
ruby33
Ruby 3.2
1st gen, 2nd gen
Ubuntu 22.04
ruby32
Ruby 3.0
1st gen, 2nd gen
Ubuntu 18.04
ruby30
Ruby 2.7
1st gen, 2nd gen
Ubuntu 18.04
ruby27
Ruby 2.6
1st gen, 2nd gen
Ubuntu 18.04
ruby26
PHP
Runtime
Environment
Generation
Runtime ID
PHP 8.5
2nd gen
Ubuntu 24.04
php85
PHP 8.4
2nd gen
Ubuntu 22.04
php84
PHP 8.3
2nd gen
Ubuntu 22.04
php83
PHP 8.2
1st gen, 2nd gen
Ubuntu 22.04
php82
PHP 8.1
1st gen, 2nd gen
Ubuntu 18.04
php81
PHP 7.4
1st gen, 2nd gen
Ubuntu 18.04
php74
.NET Core
Runtime
Generation
Environment
Runtime ID
.NET Core 10
2nd gen
Ubuntu 24.04
dotnet10
.NET Core 8
2nd gen
Ubuntu 22.04
dotnet8
.NET Core 6
1st gen, 2nd gen
Ubuntu 22.04
dotnet6
.NET Core 3
1st gen, 2nd gen
Ubuntu 18.04
dotnet3
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
