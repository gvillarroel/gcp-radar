---
title: "REST Resource: projects.locations.repositories.dockerImages \_|\_ Artifact\
  \ Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages
  title: "REST Resource: projects.locations.repositories.dockerImages \_|\_ Artifact\
    \ Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Reference
Send feedback
REST Resource: projects.locations.repositories.dockerImages
Stay organized with collections
Save and categorize content based on your preferences.
Resource: DockerImage
JSON representation
ImageManifest
JSON representation
Methods
Resource: DockerImage
DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime
JSON representation
{
"name" : string ,
"uri" : string ,
"tags" : [
string
] ,
"imageSizeBytes" : string ,
"uploadTime" : string ,
"mediaType" : string ,
"buildTime" : string ,
"updateTime" : string ,
"artifactType" : string ,
"imageManifests" : [
{
object ( ImageManifest )
}
]
}
Fields
name
string
Required. registry_location, projectId, repository_name and image id forms a unique image name: projects/<projectId>/locations/<location>/repositories/<repository_name>/dockerImages/<docker_image> . For example, "projects/test-project/locations/us-west4/repositories/test-repo/dockerImages/ nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf" , where "us-west4" is the registry_location, "test-project" is the projectId, "test-repo" is the repository_name and "nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf" is the image's digest.
uri
string
Required. URL to access the image. Example: us-west4-docker.pkg.dev/test-project/test-repo/nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf
tags[]
string
Tags attached to this image.
imageSizeBytes
string ( int64 format)
Calculated size of the image. This field is returned as the 'metadata.imageSizeBytes' field in the Version resource.
uploadTime
string ( Timestamp format)
Time the image was uploaded.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
mediaType
string
Media type of this image, e.g. "application/vnd.docker.distribution.manifest.v2+json". This field is returned as the 'metadata.mediaType' field in the Version resource.
buildTime
string ( Timestamp format)
The time this image was built. This field is returned as the 'metadata.buildTime' field in the Version resource. The build time is returned to the client as an RFC 3339 string, which can be easily used with the JavaScript Date constructor.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time when the docker image was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
artifactType
string
ArtifactType of this image, e.g. "application/vnd.example+type". If the subjectDigest is set and no artifactType is given, the mediaType will be considered as the artifactType . This field is returned as the metadata.artifactType field in the Version resource.
imageManifests[]
object ( ImageManifest )
Optional. For multi-arch images (manifest lists), this field contains the list of image manifests.
ImageManifest
Details of a single image manifest within a multi-arch image.
JSON representation
{
"architecture" : string ,
"os" : string ,
"digest" : string ,
"mediaType" : string ,
"osVersion" : string ,
"osFeatures" : [
string
] ,
"variant" : string
}
Fields
architecture
string
Optional. The CPU architecture of the image. Values are provided by the Docker client and are not validated by Artifact Registry. Example values include "amd64", "arm64", "ppc64le", "s390x", "riscv64", "mips64le", etc.
os
string
Optional. The operating system of the image. Values are provided by the Docker client and are not validated by Artifact Registry. Example values include "linux", "windows", "darwin", "aix", etc.
digest
string
Optional. The manifest digest, in the format "sha256: ".
mediaType
string
Optional. The media type of the manifest, e.g., "application/vnd.docker.distribution.manifest.v2+json"
osVersion
string
Optional. The OS version of the image, for example on Windows 10.0.14393.1066 .
osFeatures[]
string
Optional. The required OS features for the image, for example on Windows win32k .
variant
string
Optional. The variant of the CPU in the image, for example v7 to specify ARMv7 when architecture is arm .
Methods
get
Gets a docker image.
list
Lists docker images.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-14 UTC."],[],[]]
