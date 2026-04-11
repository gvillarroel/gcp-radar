---
title: "Work with other artifact formats \_|\_ Artifact Registry \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/generic
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/generic
  title: "Work with other artifact formats \_|\_ Artifact Registry \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Work with other artifact formats
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to store versioned, immutable artifacts that don't
adhere to any specific package format in Artifact Registry generic format
repositories.
To get familiar with storing generic artifacts in Artifact Registry, you
can try the quickstart .
Generic artifacts are files of any format including, but not limited to, the
following:
Compressed files, such as tar files and zip files
Configuration files, such as YAML and TOML files
Text files and PDFs
Binaries
Archives
Media files
Unlike other formats, artifacts stored in generic format repositories aren't
meant to be used by Docker, package managers, or other third-party clients.
Before you begin
Create a generic format repository .
Verify that you have the required permissions for the
repository.
(Optional) Configure defaults for Google Cloud CLI commands .
Required roles
To get the permissions that
you need to manage generic artifacts,
ask your administrator to grant you the
following IAM roles on the repository:
View artifacts:
Artifact Registry Reader ( roles/artifactregistry.reader )
Download artifacts:
Artifact Registry Reader ( roles/artifactregistry.reader )
Upload artifacts to a repository:
Artifact Registry Writer ( roles/artifactregistry.writer )
Delete artifacts:
Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Upload generic artifacts
You can upload generic artifacts individually by file or in multiples by
directory. When uploading, a package name and version number must be
specified. You can also specify the path in the destination file structure to
upload them to. If no destination path is specified, artifacts are uploaded to
the root level by default.
To upload generic artifacts to your repository, run the following command:
gcloud
Before using any of the command data below,
make the following replacements:
PROJECT : your Google Cloud
project ID .
If your project ID contains a colon ( : ), see
Domain-scoped projects
LOCATION : the regional or multi-regional
location of the repository.
REPOSITORY : the name of the repository where the
artifact is stored.
SOURCE : the location and name of the file you are
uploading.
PACKAGE : the package name of the file you are
uploading.
VERSION : the version of the file you are uploading.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts generic upload \
--project = PROJECT \
--source = SOURCE \
--package = PACKAGE \
--version = VERSION \
--location = LOCATION \
--repository = REPOSITORY
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts generic upload `
--project = PROJECT `
--source = SOURCE `
--package = PACKAGE `
--version = VERSION `
--location = LOCATION `
--repository = REPOSITORY
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts generic upload ^
--project = PROJECT ^
--source = SOURCE ^
--package = PACKAGE ^
--version = VERSION ^
--location = LOCATION ^
--repository = REPOSITORY
There are additional flags you can use when uploading artifacts:
--destination-path= PATH to upload to a specified folder within the
package and version. It will also create any folders that don't exist.
--source-directory= SOURCE_DIR to replace the --source
flag and upload a directory instead of a single file.
--skip-existing when using the --source-directory flag to skip over
already existing files. Otherwise, the command will fail when attempting to upload a file that
already exists.
API
Before using any of the request data, make the following replacements:
PROJECT is your Google Cloud
project ID . If your project ID contains a colon ( : ), see
Domain-scoped projects
LOCATION is the regional or
multi-regional location of the repository.
REPOSITORY is the name of the
repository where the artifact is stored.
SOURCE is the location and name of
the file you are uploading.
PACKAGE is package name of the
file you are uploading.
VERSION is version of the file you
are uploading.
NAME is the file's new name in the
repository.
HTTP method and URL:
POST https://artifactregistry.googleapis.com/upload/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /genericArtifacts:create?alt = json
curl (Linux, macOS, or Cloud Shell)
To send your request, execute the following command:
curl -v \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-F "meta={'filename':' NAME ','package_id':' PACKAGE ','version_id':' VERSION '};type=application/json" \
-F "blob=@ SOURCE " \
https://artifactregistry.googleapis.com/upload/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /genericArtifacts:create?alt = json
List artifacts
console
You can view artifacts for generic format repositories in the
Google Cloud console.
Open the Repositories page in the Google Cloud console.
Open the Repositories page
In the repository list, select the repository.
Click the name of the package.
To view downloadable files for all package versions, click the Files
tab.
To view downloadable files for a specific version of your package, click
the version name, and then click the Files tab.
gcloud
You can list artifacts in a repository with the gcloud artifacts files list
command.
Before using any of the command data below,
make the following replacements:
PROJECT : your Google Cloud
project ID .
If your project ID contains a colon ( : ), see
Domain-scoped projects
LOCATION : the regional or multi-regional
location of the repository.
REPOSITORY : the name of the repository where the
artifact is stored.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts files list \
--project = PROJECT \
--location = LOCATION \
--repository = REPOSITORY
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts files list `
--project = PROJECT `
--location = LOCATION `
--repository = REPOSITORY
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts files list ^
--project = PROJECT ^
--location = LOCATION ^
--repository = REPOSITORY
The response includes the file details in the format
PACKAGE : VERSION : NAME .
FILE: my-package:1.0.0:hello.yaml
CREATE_TIME: 2023-03-09T20:55:07
UPDATE_TIME: 2023-03-09T20:55:07
SIZE (MB): 0.000
OWNER: projects/my-project/locations/us-central1/repositories/quickstart-generic-repo/packages/my-package/versions/1.0.0
It is also possible to sort by version and package by adding one or both of
the following flags:
--package= PACKAGE to show only files of a specific
package.
--version= VERSION to show only files of a specific
version.
Download generic artifacts
To download generic artifacts from your repository, run the following command:
gcloud
Before using any of the command data below,
make the following replacements:
DESTINATION : the path to the destination folder
in your local file system. The destination folder must already exist or the command will
fail.
LOCATION : the regional or multi-regional
location of the repository.
REPOSITORY : the name of the repository where the
artifact is stored.
PACKAGE : the package of the file to download.
VERSION : the version of the file to download.
NAME (optional): the name of the file to download.
Without this flag the command will download all files for the specified package and version as
well as create the necessary directories in the destination.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts generic download \
--destination = DESTINATION \
--location = LOCATION \
--repository = REPOSITORY \
--package = PACKAGE \
--version = VERSION \
--name = NAME
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts generic download `
--destination = DESTINATION `
--location = LOCATION `
--repository = REPOSITORY `
--package = PACKAGE `
--version = VERSION `
--name = NAME
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts generic download ^
--destination = DESTINATION ^
--location = LOCATION ^
--repository = REPOSITORY ^
--package = PACKAGE ^
--version = VERSION ^
--name = NAME
API
Before using any of the request data,
make the following replacements:
PROJECT : your Google Cloud
project ID .
If your project ID contains a colon ( : ), see
Domain-scoped projects .
LOCATION : the regional or multi-regional
location of the repository.
REPOSITORY : the name of the repository
where the artifact is stored.
DESTINATION : the path to the
destination folder in your local file system. The destination folder must already exist or the
command will fail.
FILE : the url-encoded filename. You can
find this value by running the gcloud
artifacts files list command and copying the value for FILE . It must be
converted to URL-encoded format for this command—for example, path/to/file.jar
would need to be input as path%2Fto%2Ffile.jar .
HTTP method and URL:
GET https://artifactregistry.googleapis.com/download/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /files/ FILE :download?alt=media
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ --output DESTINATION \ "https://artifactregistry.googleapis.com/download/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /files/ FILE :download?alt=media"
PowerShell (Windows)
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -OutFile DESTINATION ` -Uri "https://artifactregistry.googleapis.com/download/v1/projects/ PROJECT /locations/ LOCATION /repositories/ REPOSITORY /files/ FILE :download?alt=media"
You should see the download begin right away.
Delete generic artifacts
To delete generic artifacts from your repository, run the gcloud artifacts
files delete command. This command is only available to generic format
repositories.
Before using any of the command data below,
make the following replacements:
FILE : the full filename. You can find this value by
running the gcloud artifacts files
list command and copying the value for FILE .
LOCATION : the regional or multi-regional
location of the repository.
REPOSITORY : the name of the repository where the
artifact is stored.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts files delete \
FILE \
--location = LOCATION \
--repository = REPOSITORY
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts files delete `
FILE `
--location = LOCATION `
--repository = REPOSITORY
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud artifacts files delete ^
FILE ^
--location = LOCATION ^
--repository = REPOSITORY
What's next
Try the generic repository quickstart
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
