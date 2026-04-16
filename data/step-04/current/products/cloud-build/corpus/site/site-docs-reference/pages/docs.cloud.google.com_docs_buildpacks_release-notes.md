---
title: "Buildpacks release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/buildpacks/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/buildpacks/build-application
source_metadata:
  url: https://docs.cloud.google.com/docs/buildpacks/release-notes
  title: "Buildpacks release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Buildpacks
Resources
Send feedback
Buildpacks release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Buildpacks.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 03, 2026
Feature
The Node.js buildpack supports the Bun package manager in General Availability . For more information, see
Building a Node.js application .
March 13, 2026
Feature
The Node.js buildpack supports the Bun package manager in Preview . For more information, see
Building a Node.js application .
February 17, 2026
Feature
Cloud Run source deployment supports Ubuntu 24
LTS base images in General Availability . This builder is available under
gcr.io/buildpacks/builder:google-24 . For more information, see
Builders .
February 11, 2026
Feature
Support for osonly24 runtime is in General Availability . The OS only runtime lets you deploy binaries such as Dart and Go. For more information, see Configure the OS only runtime .
January 22, 2026
Feature
The Python buildpack supports default entrypoint detection for the Agent Development Kit (ADK) framework in General Availability . For more information, see Build a Python application .
January 13, 2026
Feature
Cloud Run and Cloud Run functions source deployments support the pyproject.toml
file for managing dependencies. This feature is in General Availability for all
supported Python versions .
For more information, see Deploy Python applications with a pyproject.toml
file .
December 19, 2025
Feature
The Python buildpack supports default entrypoint detection for the Agent Development Kit (ADK) framework (Preview). For more information, see Build a Python application .
Feature
Cloud Run and Cloud Run functions source deployments support pyproject.toml
file for managing dependencies. This feature is in General Availability for Python version 3.13 and later, and is in Preview for Python version 3.12 and earlier.
For more information, see Deploy Python applications with a pyproject.toml
file .
December 18, 2025
Feature
Support for osonly24 runtime is in Preview . The OS only runtime lets you deploy Go applications from source, and binaries such as Dart and Go. For more information, see Configure the OS only runtime .
November 14, 2025
Feature
Cloud Run and Cloud Run functions source deployments support pyproject.toml
file for managing dependencies. If you use a pyproject.toml file, source deployments
use one of the following to find and install dependencies:
pip
uv
poetry
For more information, see Deploy Python applications with a pyproject.toml
file (Preview).
September 18, 2025
Feature
Ubuntu 24 builder with the google-24 stack is available for Google Cloud's Buildpacks. For more information, see Builders and Use a specific builder .
August 14, 2025
Feature
The Python buildpack supports Cloud Run source deployments for modern web frameworks such as FastAPI , Gradio , and Streamlit .
For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments based on the web server or framework configuration in your requirements.txt file. For more information, see Build a Python application .
September 23, 2024
Change
The runtime support schedule for some PHP runtimes has been extended to match PHP's public support schedule .
February 26, 2024
Feature
Starting in Go version 1.22 and later, you can no longer use GOPATH for installing dependencies. To manage dependencies, you use a go.mod file. For more information about Go versions, and managing dependencies for vendor directories, see GOPATH and Modules in Go documentation.
August 28, 2023
Announcement
The support policy and schedule for Google Cloud's buildpacks is now available at https://cloud.google.com/docs/buildpacks/support-policy .
July 19, 2023
Change
The Python buildpack now uses gunicorn --bind :8080 main:app as the default entrypoint for all web applications. If you currently use a Procfile , it will continue to work but you are no longer required to configure a Procfile for your projects. Learn more about Python application entrypoints .
June 27, 2023
Change
The default generic builder now uses the Ubuntu 22 LTS base image. When you specify the latest location, the builds now uses the google-22 builder by default. For example, you can specify either of the following to use google-22 :
gcr.io/buildpacks/builder:latest
gcr.io/buildpacks/builder:google-22
If you need to pin your build to the previous Ubuntu 18 builder, see the instructions about how to configure the builder version , including:
pack commands for local builds.
gcloud commands for remote builds.
How to configure the project.toml for Cloud Run.
June 22, 2023
Feature
The Java runtime now supports using Maven wrappers for managing your project's dependency on Maven.
June 01, 2023
Feature
You can use the Pnpm package manager to configure dependencies for Node.js runtimes. Learn how to configure your application .
April 26, 2023
Announcement
Starting June 5, 2023, the default generic builder will begin using the Ubuntu 22 LTS base image. This means that builds using gcr.io/buildpacks/builder:latest will get the google-22 builder which addresses multiple security issues. You can read more about the google-22 builder in our announcement on GitHub .
You can preview the new builder by adding --builder=gcr.io/buildpacks/builder:google-22 to the gcloud builds submit --pack command when you build your application with a specific builder .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
