---
title: "Migrating to the :stable image \_|\_ Google Cloud SDK \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sdk/docs/migrate-docker-images
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/migrate-docker-images
  title: "Migrating to the :stable image \_|\_ Google Cloud SDK \_|\_ Google Cloud\
    \ Documentation"
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
Migrating to the :stable image
Stay organized with collections
Save and categorize content based on your preferences.
If you are using the :latest , :alpine , :emulators , :latest , :slim
and :debian_component_based Docker images, we recommend that you migrate to
debian based :stable image for a smaller image size and improved security
fixes. To transition to using the :stable image you can
extend the :stable Docker image
to the debian based image you are using.
In some cases (i.e.- installing older incompatible dependencies like python2 or
older jdks etc), extending the :stable image is not always feasible. In which
case you may have to build your own Dockerfile.
Extending the :stable Docker image
You can use the :stable Docker image as a base image and install
additional components and apt packages to extend it into
the other debian based Docker images (i.e.- :latest , :emulators , and
:slim ). To extend the :stable Docker image, we can do one of the
following:
Extending the :stable base image by customizing at runtime
Extending the :stable base image by building your own Dockerfile
Extending the :stable base image by customizing at runtime
You can extend the :stable Docker image to use as the :latest , :emulators
or :slim image by customizing it at runtime.
Customize to the :latest Image
Run the following docker run command to extend the :stable Docker
image into the :latest Docker image at run time:
$ docker run -e APT_PACKAGES = 'curl python3-crcmod lsb-release openssh-client git make gnupg' \
-e COMPONENTS = 'google-cloud-cli-datastore-emulator google-cloud-cli-pubsub-emulator google-cloud-cli-bigtable-emulator google-cloud-cli-firestore-emulator google-cloud-cli-spanner-emulator google-cloud-cli-cbt google-cloud-cli-kpt google-cloud-cli-local-extract google-cloud-cli-gke-gcloud-auth-plugin kubectl' \
gcr.io/google.com/cloudsdktool/google-cloud-cli:stable gcloud version
Note: If you need a Docker engine installed in your Docker image, you can
extend your :stable image by using it in a Dockerfile. For steps, see
Extending the :stable base image by building your own Dockerfile .
Customize to the :emulators Image
You can run the following command to extend the :stable Docker image
into the :emulators Docker image at runtime:
$ docker run -e APT_PACKAGES = 'curl python3-crcmod lsb-release gnupg bash' \
-e COMPONENTS = 'google-cloud-cli-datastore-emulator google-cloud-cli-pubsub-emulator google-cloud-cli-bigtable-emulator google-cloud-cli-firestore-emulator google-cloud-cli-spanner-emulator' \
gcr.io/google.com/cloudsdktool/google-cloud-cli:stable gcloud version
Customize to the :slim Image
You can extend the :stable Docker image as the :slim Docker image by
running the following docker run command:
$ docker run -e APT_PACKAGES = 'curl gcc python3-crcmod python3-pip lsb-release openssh-client git gnupg' \
gcr.io/google.com/cloudsdktool/google-cloud-cli:stable gcloud version
Note: If you need a docker engine installed in your Docker image, you can
build your image from the pre-existing Dockerfiles. For steps, see
Extending the :stable base image by building your own Dockerfile .
Extending the :stable image with build configuration
You can use your own custom build configuration
file(s) to extend the :stable Docker image to install additional packages
or components. For example, if you want extend your :stable docker image to
install python3-google-auth and python3-requests packages and install
the pubsub emulator component, you can use the following build config file.
steps :
- id : 'extend-stable'
name : gcr.io/google.com/cloudsdktool/google-cloud-cli:499.0.0-stable
args :
- gcloud
- version
env :
- 'APT_PACKAGES=python3-google-auth python3-requests'
- 'COMPONENTS=google-cloud-cli-pubsub-emulator'
Extending the :stable base image by building your own Dockerfile
You can extend the :stable Docker image by creating your own
Dockerfile with :stable image as the base image and then build the docker
image with docker build command.
Build your own :latest Image
To convert the :stable image into the :latest image, do the following:
Create your own Dockerfile from :stable by installing the required
components and packages:
FROM docker:27.1.1 as static-docker-source
FROM gcr.io/google.com/cloudsdktool/google-cloud-cli:stable
COPY --from = static-docker-source /usr/local/bin/docker /usr/local/bin/docker
COPY --from = static-docker-source /usr/local/libexec/docker/cli-plugins/docker-buildx /usr/local/libexec/docker/cli-plugins/docker-buildx
RUN apt-get update -qqy && apt-get -qqy upgrade && apt-get install -qqy \
curl \
python3-crcmod \
lsb-release \
openssh-client \
git \
make \
gnupg && \
export CLOUD_SDK_REPO = "cloud-sdk- $( lsb_release -c -s ) " && \
export CLOUD_SDK_VERSION = $( gcloud version | grep "Google Cloud SDK" | grep -oE '[^ ]+$' ) && \
echo "deb https://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" > /etc/apt/sources.list.d/google-cloud-sdk.list && \
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add - && \
apt-get update && \
apt-get install -y google-cloud-cli-datastore-emulator = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-pubsub-emulator = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-bigtable-emulator = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-firestore-emulator = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-spanner-emulator = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-cbt = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-kpt = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-local-extract = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-gke-gcloud-auth-plugin = ${ CLOUD_SDK_VERSION } -0 \
kubectl
Build the Dockerfile to get your own :latest Docker image:
$ docker build -t my-cloud-sdk-docker:latest .
Build your own :emulators Image
To convert the :stable image into the :emulators image, do the following:
Create the Dockerfile with required components and packages as:
FROM gcr.io/google.com/cloudsdktool/google-cloud-cli:stable
RUN apt-get update -qqy && apt-get -qqy upgrade && apt-get install -qqy \
curl \
python3-crcmod \
lsb-release \
gnupg \
bash && \
export CLOUD_SDK_REPO = "cloud-sdk- $( lsb_release -c -s ) " && \
export CLOUD_SDK_VERSION = $( gcloud version | grep "Google Cloud SDK" | grep -oE '[^ ]+$' ) && \
echo "deb https://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" > /etc/apt/sources.list.d/google-cloud-sdk.list && \
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add - && \
apt-get update && \
apt-get install -y google-cloud-cli-datastore-emulator = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-pubsub-emulator = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-bigtable-emulator = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-firestore-emulator = ${ CLOUD_SDK_VERSION } -0 \
google-cloud-cli-spanner-emulator = ${ CLOUD_SDK_VERSION } -0
Build the Dockerfile by running the command:
$ docker build -t my-cloud-sdk-docker:emulators .
Build your own :slim Image
To convert the :stable image into the :slim image, do the following:
Create a Dockerfile using :stable as base image:
FROM docker:27.1.1 as static-docker-source
FROM gcr.io/google.com/cloudsdktool/google-cloud-cli:stable
COPY --from = static-docker-source /usr/local/bin/docker /usr/local/bin/docker
COPY --from = static-docker-source /usr/local/libexec/docker/cli-plugins/docker-buildx /usr/local/libexec/docker/cli-plugins/docker-buildx
RUN apt-get update -qqy && apt-get -qqy upgrade && apt-get install -qqy \
curl \
python3-crcmod \
lsb-release \
openssh-client \
git \
make \
gnupg
Build the Dockerfile by running the following command:
$ docker build -t my-cloud-sdk-docker:slim .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
