---
title: "Post-migration image updates \_|\_ Migrate to Containers \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs/getting-started
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates
  title: "Post-migration image updates \_|\_ Migrate to Containers \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Containers
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Post-migration image updates
This page describes how to perform maintenance operations for your
migrated workloads.
The container artifacts that you generate
aren't meant only for deployment of the migrated workload in the target
cluster.
You also need them for Day 2 maintenance operations, including applying
application and user-mode OS software updates, security patches, editing embedded
configurations, adding or replacing files, and for updating the
Migrate to Containers runtime software.
Review the generated image Dockerfile
Maintenance operations use the generated Dockerfile and the captured
system image layer. When combined with the Migrate to Containers runtime layer,
these files can be built into an executable container image.
The generated container artifacts are created with CI/CD pipeline build
phase integration in mind, as described in the following diagram:
The Dockerfile is structured as a
multi-stage build ,
for easier maintenance and manipulation, while keeping the image from inflating.
Here's a sample of a generated Dockerfile:
FROM us-docker.pkg.dev/migrate-modernize-public/modernize-plugins-prod/service-manager-runtime:1.0.3 as service-manager-runtime
FROM scratch
# Tar containing data captured from the source VM
ADD vmFiles.tar.gz /
COPY --from = service-manager-runtime / /
ADD blocklist.yaml /.m4a/blocklist.yaml
ADD logs.yaml /code/config/logs/logsArtifact.yaml
ADD services-config.yaml /.m4a/
ADD tempfiles.yaml /.m4a/
# If you want to update parts of the image, add your commands here.
# For example:
# RUN apt-get update
# RUN apt-get install -y \
# package1=version \
# package2=version \
# package3=version
# RUN yum update
# RUN wget http://github.com
ENTRYPOINT [ "/ko-app/service-manager-runtime" , "start" , "-c" , "/.m4a/" ]
For more information on building container images with Cloud Build,
see Building container images .
Update the migrated workload components layer
For any updates or modifications you want to apply to the migrated workload
image layer, you should apply them before the ENTRYPOINT directive.
In the following example, we update a container image migrated from a SUSE
Enterprise Linux (SLES) VM as source, using Cloud Build and the
gcloud CLI. The following example updates the SLES distro openssh
package.
Updated Dockerfile:
FROM us-docker.pkg.dev/migrate-modernize-public/modernize-plugins-prod/service-manager-runtime:1.0.3 as service-manager-runtime
FROM scratch
# Tar containing data captured from the source VM
ADD vmFiles.tar.gz /
COPY --from = service-manager-runtime / /
ADD blocklist.yaml /.m4a/blocklist.yaml
ADD logs.yaml /code/config/logs/logsArtifact.yaml
ADD services-config.yaml /.m4a/
ADD tempfiles.yaml /.m4a/
# If you want to update parts of the image, add your commands here.
# For example:
# RUN apt-get update
# RUN apt-get install -y \
# package1=version \
# package2=version \
# package3=version
# RUN yum update
# RUN wget http://github.com
RUN zypper ref -s && zypper -n in openssh
ENTRYPOINT [ "/ko-app/service-manager-runtime" , "start" , "-c" , "/.m4a/" ]
Then, deploy the updated image to the cluster .
Update the Migrate to Containers layer version
When new versions of Migrate to Containers software are released, you can
update that software version in deployed workload images. Such updates may
include new features, enhancements or bug fixes.
To update the Migrate to Containers software layer, edit the
Dockerfile and change the version tag to the updated version you want to apply.
Using the previous example, you can update the version from 1.0.3 to the
hypothetical version 1.0.4 by editing the
FROM directive to the following:
FROM us-docker.pkg.dev/migrate-modernize-public/modernize-plugins-prod/service-manager-runtime:1.0.4 as service-manager-runtime
After updating the Dockerfile, you will need to build a new workload container
image version and apply it to existing deployments to get it updated.
What's next
Learn how to monitor migrated workloads .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
