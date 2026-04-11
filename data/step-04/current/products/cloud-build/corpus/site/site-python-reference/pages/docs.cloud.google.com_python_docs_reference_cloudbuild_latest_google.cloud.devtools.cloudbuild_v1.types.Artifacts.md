---
title: "Class Artifacts (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts
  title: "Class Artifacts (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class Artifacts (3.35.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.35.0 (latest)
3.34.0
3.33.0
3.32.0
3.31.3
3.30.0
3.29.0
3.28.0
3.27.1
3.26.0
3.25.0
3.24.2
3.23.3
3.22.0
3.21.0
3.20.1
3.19.0
3.18.0
3.17.1
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.1
3.10.0
3.9.3
3.8.3
3.7.1
3.6.0
3.5.2
3.4.0
3.3.2
3.2.1
3.1.1
3.0.2
2.0.2
1.1.2
1.0.0
0.1.0
Artifacts ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Artifacts produced by a build that should be uploaded upon
successful completion of all build steps.
Attributes
Name
Description
images
MutableSequence[str]
A list of images to be pushed upon the
successful completion of all build steps.
The images will be pushed using the builder
service account's credentials.
The digests of the pushed images will be stored
in the Build resource's results field.
If any of the images fail to be pushed, the
build is marked FAILURE.
objects
google.cloud.devtools.cloudbuild_v1.types.Artifacts.ArtifactObjects
A list of objects to be uploaded to Cloud
Storage upon successful completion of all build
steps.
Files in the workspace matching specified paths
globs will be uploaded to the specified Cloud
Storage location using the builder service
account's credentials.
The location and generation of the uploaded
objects will be stored in the Build resource's
results field.
If any objects fail to be pushed, the build is
marked FAILURE.
maven_artifacts
MutableSequence[ google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact ]
A list of Maven artifacts to be uploaded to
Artifact Registry upon successful completion of
all build steps.
Artifacts in the workspace matching specified
paths globs will be uploaded to the specified
Artifact Registry repository using the builder
service account's credentials.
If any artifacts fail to be pushed, the build is
marked FAILURE.
go_modules
MutableSequence[ google.cloud.devtools.cloudbuild_v1.types.Artifacts.GoModule ]
Optional. A list of Go modules to be uploaded
to Artifact Registry upon successful completion
of all build steps.
If any objects fail to be pushed, the build is
marked FAILURE.
python_packages
MutableSequence[ google.cloud.devtools.cloudbuild_v1.types.Artifacts.PythonPackage ]
A list of Python packages to be uploaded to
Artifact Registry upon successful completion of
all build steps.
The build service account credentials will be
used to perform the upload.
If any objects fail to be pushed, the build is
marked FAILURE.
npm_packages
MutableSequence[ google.cloud.devtools.cloudbuild_v1.types.Artifacts.NpmPackage ]
A list of npm packages to be uploaded to
Artifact Registry upon successful completion of
all build steps.
Npm packages in the specified paths will be
uploaded to the specified Artifact Registry
repository using the builder service account's
credentials.
If any packages fail to be pushed, the build is
marked FAILURE.
Classes
ArtifactObjects
ArtifactObjects ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Files in the workspace to upload to Cloud Storage upon
successful completion of all build steps.
GoModule
GoModule ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Go module to upload to Artifact Registry upon successful
completion of all build steps. A module refers to all
dependencies in a go.mod file.
MavenArtifact
MavenArtifact ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A Maven artifact to upload to Artifact Registry upon
successful completion of all build steps.
NpmPackage
NpmPackage ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Npm package to upload to Artifact Registry upon successful
completion of all build steps.
PythonPackage
PythonPackage ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Python package to upload to Artifact Registry upon successful
completion of all build steps. A package can encapsulate
multiple objects to be uploaded to a single repository.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
