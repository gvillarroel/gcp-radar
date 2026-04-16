---
title: "Installing the Google Cloud CLI Docker image \_|\_ Google Cloud SDK \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/sdk/docs/downloads-docker
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/downloads-docker
  title: "Installing the Google Cloud CLI Docker image \_|\_ Google Cloud SDK \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Google Cloud SDK
Guides
Send feedback
Installing the Google Cloud CLI Docker image
Stay organized with collections
Save and categorize content based on your preferences.
The Google Cloud CLI Docker image lets you pull a specific version of
gcloud CLI as a Docker image from
Artifact Registry and quickly execute
Google Cloud CLI commands in an isolated, correctly configured container.
The Google Cloud CLI Docker image is the gcloud CLI installed on
top of a Debian or Alpine image. The
Google Cloud CLI Docker Images enable the usage of gcloud
as well as its bundled components without having to manually install
gcloud in your local machine.
Docker image options
There are six Google Cloud CLI Docker images, and all will install the
gcloud , gsutil and bq command-line tools. We recommend that you install
the :stable image for a minimal environment. You can also
use the stable image as the base image for your own deployments which gives you
the flexibility of installing only the components and packages that you need in
your image:
:stable , :VERSION-stable : Provides a gcloud installation
with gsutil and bq components. The image is built upon the latest
Google-Provided
Debian 12 base image. This image supports both linux/amd and linux/arm
platforms. To install specific gcloud versions, use
the :VERSION-stable tag.
If you want to use an Alpine-based image, you can install the following
image:
:alpine , :VERSION-alpine : Similar to stable but built upon the latest
Alpine 3.20
base image. This image supports both linux/amd and linux/arm platforms. To
install specific gcloud versions, use the :VERSION-alpine tag.
If you want images with additional
components or packages pre-installed,
you can install one of the following options:
:emulators , :VERSION-emulators : Similar to stable, with the
addition of all the emulator components. The image is build upon the latest
Google-Provided
Debian 12 base image and uses component manager to install the components. This
image supports both linux/amd and linux/arm platforms. To install specific
gcloud versions, use the :VERSION-emulators
tag.
:latest , :VERSION : Similar to stable, with additional components
(List of components installed in the image are listed
below ) pre-installed. The image is build
upon the latest
Google-Provided
Debian 12 base image and uses deb packages to install the components.
This image supports both linux/amd and linux/arm platforms. To install
specific gcloud versions, use the :VERSION
tag.
:slim , :VERSION-slim : Similar to stable but includes the additional
third party packages like curl , python3-crcmod ,
lsb-release , openssh-client , git , make , and gnupg . This image is
built upon the latest
Google-Provided
Debian 12 base image. This image supports both linux/amd and linux/arm
platforms. To install specific gcloud versions, use
the :VERSION-slim tag.
:debian_component_based , :VERSION-debian_component_based : Similar to
stable, with additional components
(List of components installed in the image are listed
below ) pre-installed. The image is build
upon the latest
Google-Provided
Debian 12 base image and uses component manager to install the components. This
image supports both linux/amd and linux/arm platforms. To install specific
gcloud versions, use the :VERSION-debian_component_based tag.
Use a specific version in production
If you use a tag that is not tied to a specific gcloud version,
your environment might experience the following possible breaking changes:
Google Cloud SDK version updates, which may change the behavior of the tool.
Updates to the list of installed components.
To avoid possible breaking changes, it is recommended that your production
environment use either of the following:
A versioned tag, such as :496.0.0-stable
A specific image hash such as: gcr.io/google.com/cloudsdktool/google-cloud-cli@sha256:9c0efc06918d5405b13bfe4bb5ce1d98ea4695cc703446e9e0aa0ee8800622df
Host the image in your own repository
You should also update the images periodically to get the latest
gcloud version.
Check the latest Google Cloud CLI version and all previous Google Cloud CLI versions .
Components installed in each tag
Component
:stable
:alpine
:emulators
:latest
:slim
:debian_component_based
App Engine Go Extensions
x
x
Appctl
x
BigQuery Command Line Tool
x
x
x
x
x
x
Bundled Python
x
x
x
x
x
x
Bigtable Command Line Tool
x
x
Bigtable Emulator
x
x
x
Cloud Datastore Emulator
x
x
x
Cloud Firestore Emulator
x
x
Cloud Pub/Sub Emulator
x
x
x
Spanner Emulator
x
x
Cloud Storage Command Line Tool
x
x
x
x
x
x
Google Cloud CLI Core Libraries
x
x
x
x
x
x
Google Cloud CRC32C Hash Tool
x
x
x
x
x
x
Kustomize
x
Minikube
x
Nomos CLI
x
On-Demand Scanning API extraction helper
x
x
Skaffold
x
anthos-auth
x
gcloud Alpha Commands
x
x
x
x
gcloud Beta Commands
x
x
x
x
gcloud app Java Extensions
x
gcloud app Python Extensions
x
gcloud app Python Extensions (Extra Libraries)
x
x
gke-gcloud-auth-plugin
x
x
kpt
x
x
kubectl
x
x
Installing a Docker image
The Docker image is hosted on
Artifact Registry
with the following repository name:
gcr.io/google.com/cloudsdktool/google-cloud-cli . The images are also available
using the us.gcr.io , eu.gcr.io , and asia.gcr.io repositories.
To use the image of the stable Google Cloud CLI release,
gcr.io/google.com/cloudsdktool/google-cloud-cli:stable ,
pull it from Artifact Registry
by running the following command:
docker pull gcr.io/google.com/cloudsdktool/google-cloud-cli:489.0.0-stable
You can also use the image hash
to pull a specific Docker image from the repository. To pull the same image
from the previous example ( :489.0.0-stable ) using the image hash, run the
following command:
docker pull gcr.io/google.com/cloudsdktool/google-cloud-cli@sha256:589a0db8919614ef919dfd6ed89127211b4b6bf5ee6a2e2ce92abf33cbfe49d8
Verify the installation by running:
docker run --rm gcr.io/google.com/cloudsdktool/google-cloud-cli:489.0.0-stable gcloud version
If you have used the floating :stable tag (which always point to the latest
release), verify the installation by running the following command:
docker run --rm gcr.io/google.com/cloudsdktool/google-cloud-cli:stable gcloud version
Authenticating with the Google Cloud CLI Docker image
Authenticate with the Google Cloud CLI Docker image by running one of the
following commands:
Authenticate gcloud with your user credentials by
running gcloud auth login :
docker run -ti --name gcloud-config gcr.io/google.com/cloudsdktool/google-cloud-cli:stable gcloud auth login
If you need to authenticate applications that use the Google Cloud APIs,
pass the --update-adc option:
docker run -ti --name gcloud-config gcr.io/google.com/cloudsdktool/google-cloud-cli:stable gcloud auth login --update-adc
To set a default project that is selected each time you open the container,
run the following command:
docker run -ti --name gcloud-config gcr.io/google.com/cloudsdktool/google-cloud-cli:stable /bin/bash -c 'gcloud auth login && gcloud config set project your-project '
After you've authenticated successfully, credentials are preserved
in the volume of the gcloud-config container .
Note: gcloud-config container now has a volume containing your
Google Cloud credentials. Don't use gcloud-config volume in other
containers.
To verify, list the compute instance using the credentials by running the
container with --volumes-from :
docker run --rm --volumes-from gcloud-config gcr.io/google.com/cloudsdktool/google-cloud-cli:stable gcloud compute instances list --project your-project
If you want to authenticate using a service account, use the
auth/credential_file_override property to set a path to a
mounted service account. Then update the config to read the mounted service
account using the CLOUDSDK_CONFIG environment variable.
In the following example, the mycloud configuration has the
auth/credential_file_override already set. The configuration points to a
certificate file that is present within the container as a separate
volume mount.
$ docker run -ti -e CLOUDSDK_CONFIG = /config/mygcloud \
-v ` pwd ` /mygcloud:/config/mygcloud \
-v ` pwd ` :/certs gcr.io/google.com/cloudsdktool/google-cloud-cli:stable /bin/bash
bash-4.4# gcloud config list
[ auth ]
credential_file_override = /certs/svc_account.json
bash-4.4# head -10 /certs/svc_account.json
{
"type" : "service_account" ,
"project_id" : "project_id1" ,
....
bash-4.4# gcloud projects list
PROJECT_ID NAME PROJECT_NUMBER
project_id1 GCPAppID 1071284184432
For more information about setting environment variables, see the following:
Setting properties using environment variables
gcloud config
Installing additional components
You can install additional components in the Google Cloud CLI Docker image. The
approach to install additional components varies depending on the underlying
base image type.
Debian-based images
By default, the stable images ( :stable and :VERSION-stable ) have no
components installed other than bq and gsutil . To install additional
components for the stable image, do one of the following:
Building your own image using the :stable image Dockerfile :
Install packages that are not directly available
through apt-get , i.e.- docker engine.
Installing additional packages or components at runtime :
Customize your image without hosting it.
Building your own image using the :stable image Dockerfile
To build your own image with additional component from :stable , you can clone
the cloud-sdk-docker
GitHub directory and use the docker build command to build
the :stable Docker image from the Dockerfile with the INSTALL_COMPONENTS
argument. For example, to add datastore-emulator components:
# clone the GitHub docker directory
$ git clone https://github.com/GoogleCloudPlatform/cloud-sdk-docker.git
$ docker build --build-arg CLOUD_SDK_VERSION = <release_version> \
--build-arg INSTALL_COMPONENTS = "google-cloud-cli-datastore-emulator=<release_version>-0" \
-t my-cloud-sdk-docker:stable .
Installing additional packages or components at runtime
If you have pulled the stable Docker image, you can install the following
additional components during runtime:
gcloud components by using the COMPONENTS environment
variable.
apt-packages by using the APT_PACKAGES environment variable.
For example, if you want to install the cbt and kpt components at runtime,
you can run the following command:
docker run -e COMPONENTS='google-cloud-cli-cbt google-cloud-cli-kpt' \
gcr.io/google.com/cloudsdktool/google-cloud-cli:stable gcloud version
To install apt-packages curl and gcc while running the Docker image,
execute the following command:
docker run -e APT_PACKAGES='curl gcc' \
gcr.io/google.com/cloudsdktool/google-cloud-cli:stable gcloud version
Alpine-based images
To install additional components for Alpine-based images, create a Dockerfile
that uses the cloud-sdk image as the base image.
For example, to add kubectl and app-engine-java components:
Create the Dockerfile as:
FROM gcr.io/google.com/cloudsdktool/google-cloud-cli:alpine
RUN apk --update add gcompat openjdk8-jre
RUN gcloud components install app-engine-java kubectl
Build the image by executing the following command:
docker build -t my-cloud-sdk-docker:alpine .
For Alpine based images, you must install dependencies of additional
components manually.
Migrating to the :stable image
If you are using the :latest , :slim , :emulators , :alpine and
:debian_component_based Docker images, we recommend that you migrate to
the Debian-based :stable image for a smaller image size and improved security
fixes. For steps to migrate to the :stable image, see
Migrating to the :stable image .
Getting support for images
The images hosted on the
Artifact Registry
provide fully functional installs of Google Cloud CLI. If you find bugs or
issues related to the Docker images you can create a
support ticket .
When you need an image with additional components, packages, or tools, you can
create your own image layer on top of the
Google Cloud CLI Docker image.
Troubleshooting
What should you do if you see a failed to fetch <image-tag> error
while pulling the Docker image?
If you get a failed to fetch <image-tag> error while trying to pull a
Google Cloud CLI Docker image, you are most likely trying to fetch an image
tag that has been deprecated and removed. Check the
Docker Image Options for available Docker image Options
and migrate to one of the supported tags.
What are the use-cases where you cannot directly extend the :stable Docker
image to support your current workflow?
The following table lists the use-cases when you cannot directly extend the
:stable docker image to fit your workflow and lists the options to remediate:
Use-cases
Remediation Options
Third party packages like docker or docker-buildx are not included in the :stable image
If you need these third-party packages, build your own image or install these packages in the :stable Docker image manually.
What should you do if your scanner found vulnerabilities in the docker images?
Google Cloud CLI Docker images are hosted in
Artifact Registry .
Images are scanned daily and common vulnerabilities and exposures (CVEs) are
mitigated before each new gcloud release. However, if your scanner
has detected vulnerabilities in the
Google Cloud CLI Docker images that are not resolved, you can
file a bug that
includes the following information:
The type of vulnerability.
The exact location in the image.
Vulnerabilities within base OS images are only addressed to ensure that the
Google Cloud CLI Docker images are using recent, stable releases of Debian or
Alpine Linux.
Why are there tagless images in the Artifact Registry repository?
Google Cloud CLI Docker images with tags :stable , :alpine , :emulators ,
and :debian_component_based support both arm64 and amd64 platforms. The images
are build with a multi-arch build process, which combines
architecture-specific images
into a single
manifest .
The manifest also includes
platform specific attestation
images. The multi-arch build process only adds tag to the final manifest image,
but doesn't tag the individual architecture-specific images or attestation
images. As a result, you might see tagless images in the
Artifact Registry
repository. These images are not intended for use and you can safely ignore
them.
Where can I get the information about removed 3P packages from gcloud Docker images?
Information about all the removed 3P packages are available through the
announcements on GitHub .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
