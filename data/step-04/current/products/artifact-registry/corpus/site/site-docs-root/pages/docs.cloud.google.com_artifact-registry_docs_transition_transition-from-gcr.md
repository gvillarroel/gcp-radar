---
title: "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr
  title: "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\
    \ Cloud Documentation"
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
Transition from Container Registry
Stay organized with collections
Save and categorize content based on your preferences.
Container Registry is deprecated. Effective March 18, 2025, Container Registry
is shut down and writing images to Container Registry is unavailable.
gcr.io URLs hosted on Artifact Registry, including Google-owned images
with gcr.io URLs, are not affected by the Container Registry shutdown.
Artifact Registry is the recommended service for container image storage and
management on Google Cloud. Artifact Registry provides the same
container management features as Container Registry and includes additional
features and benefits. As a fully-managed service with support for both
container images and non-container artifacts, Artifact Registry extends
the capabilities of Container Registry.
Summary of new features
Artifact Registry extends the capabilities of Container Registry with the following
features:
Repository-level access control .
Hosting artifacts in regions to reduce latency and data transfer costs,
and to comply with data residency requirements.
Streaming images to Google Kubernetes Engine and
Managed Service for Apache Spark to reduce workload startup
times.
Deploying to Cloud Run from source .
Audit logging for repository activity.
Enforcement of organization policy, including encryption with
customer-managed encryption keys (CMEK) and
location constraints .
Scanning for OS and language package vulnerabilities in containers.
Virtual repositories that aggregate multiple repositories behind a
single host.
Remote repositories that cache artifacts from upstream sources such as
Docker Hub or Maven Central.
See the feature comparison for more details about these
features.
Existing Container Registry images maintained by Google
Most Google-owned images previously hosted on Container Registry are now hosted
on Artifact Registry in gcr.io repositories. You don't need to change
the URLs to pull these images. For example, you can still use the
Cloud Build official builder images .
Cached Docker Hub images on mirror.gcr.io
Artifact Registry caches frequently-accessed public Docker Hub images on
mirror.gcr.io . For more information on using mirror.gcr.io , see
Pull cached Docker Hub images .
Feature comparison
The following table summarizes differences between Container Registry and
Artifact Registry.
Feature
Container Registry
Artifact Registry
Supported formats
Container images only
Multiple artifact formats ,
including container images, language packages, and OS packages.
Domain name
gcr.io
pkg.dev
Artifact Registry can also store images for the gcr.io domain if
you set up gcr.io repositories .
Repository modes
Not applicable
Standard : Stores your artifacts.
Remote : Caches artifacts requested from an upstream source such as
Docker Hub.
Virtual : Single endpoint multiple upstream repositories.
Registry creation
You create a registry host by pushing the first image to it.
Container Registry stores images in Cloud Storage buckets in your
Google Cloud project and actions such as granting registry-specific
permissions must be applied directly to a bucket.
Creating a repository is a separate operation from pushing and pulling
to clearly separate repository administration from repository usage.
For backwards compatibility, you can set up
gcr.io repositories . The initial setup
includes automatic creation of Artifact Registry repositories for each
Container Registry host in your project and redirection of
gcr.io to the corresponding Artifact Registry repositories.
For all push and pull requests to the pkg.dev domain, the
repository must already exist.
In Artifact Registry, there are no Cloud Storage buckets to manage in your
Google Cloud projects. You perform image management actions directly
on a repository.
Registry location
Only four multi-regional registry hosts are available in a
Google Cloud project.
Create multiple, separately-controlled repositories in region or
multi-region.
Access control
Grant access using Cloud Storage roles.
You can restrict access to all images stored in a multi-region, but
not individual repositories. For example, you can restrict access to
us.gcr.io in the project my-project , but you
cannot grant specific permissions for images under
us.gcr.io/my-project/team1 and
us.gcr.io/my-project/team2
Grant access using Artifact Registry
roles .
You can restrict access
to individual repositories. For example, you can separately control
access to images in us-docker.pkg.dev/my-project/team1 and
us-docker.pkg.dev/my-project/team2
Grant conditional
access with IAM and repository tags
Authentication
Provides several authentication methods for pushing and pulling images with
a third-party client.
Artifact Registry supports the same authentication
methods as Container Registry. See Setting up authentication for Docker for details.
Customer-managed encryption keys (CMEK)
Use CMEK
to encrypt the storage buckets that contain your images.
Use CMEK to encrypt individual
repositories.
Using Google Cloud console
View and manage Container Registry images from the Container Registry section of Google Cloud console.
View a list of your Artifact Registry and Container Registry
repositories in the Artifact Registry
section of Google Cloud console. Manage your Artifact Registry
repositories and images from this page.
If you click a Container Registry repository, you are directed to the list
of images in the Container Registry section of the Google Cloud console.
Using gcloud CLI and API commands
Uses gcloud container images commands. Commands support shortened digests. If you don't specify the
full digest string, Container Registry attempts to locate the correct image
based on the partial string.
There is no REST or RPC API for Container Registry.
Uses gcloud artifacts docker commands. Commands don't support shortened digests.
For a comparison of
Container Registry and Artifact Registry gcloud CLI commands, see the
gcloud CLI command comparison .
Artifact Registry provides a REST and RPC API for managing
repositories and artifacts.
Pub/Sub notifications
Publishes changes to the gcr topic.
Publishes changes to the gcr topic. If you create repositories
in the same project as your existing Container Registry service, your
existing Pub/Sub configuration works automatically.
To learn more, see Configuring Pub/Sub notifications .
Audit logging
Container Registry does not provide audit logs for registry activity.
Use Cloud Logging to
track changes to your repositories.
Cached Docker Hub images
mirror.gcr.io is a pull-through cache that stores
the most frequently requested Docker Hub images across all users.
mirror.gcr.io is now
hosted on Artifact Registry.
mirror.gcr.io is now
hosted on Artifact Registry. No action is required unless you are using
mirror.gcr.io in a VPC Service Controls perimeter. For more
information on using mirror.gcr.io in a VPC Service Controls
perimeter, see
Use Artifact Registry with VPC Service Controls .
VPC Service Controls
You can add Container Registry to a service perimeter.
You can add Artifact Registry
to a service perimeter.
Metadata storage and analysis with
Artifact Analysis
Scans for OS and language package vulnerabiities with on-demand scanning
in images with a supported OS. Automatic scanning only returns OS
vulnerability information.
Learn more about types of
scanning .
On-demand scanning
The Google Cloud CLI command
gcloud artifacts docker images scan scans for vulnerabilities
in local images or images in the Container Registry.
The Google Cloud CLI command
gcloud artifacts docker images list-vulnerabilities returns
vulnerability scanning results.
Scans return OS and language package vulnerability information for images in
Container Registry with
supported operating systems .
Automatic scanning
The Google Cloud CLI command
gcloud container images includes flags for viewing scan results,
including vulnerabilities and other metadata.
Scans only return OS vulnerability information for images in
Container Registry with
supported operating systems .
Scans for OS and lanaguage package vulnerabiities with both on-demand and
automatic scanning.
Learn more about types of
scanning .
On-demand scanning
The Google Cloud CLI command
gcloud artifacts docker images scan scans for vulnerabilities
in local images or images in the Artifact Registry.
The Google Cloud CLI command
gcloud artifacts docker images list-vulnerabilities returns
vulnerability scanning results.
Scans return OS and language package vulnerability information for
images in Artifact Registry with
supported operating systems .
Automatic scanning
The Google Cloud CLI command
gcloud
artifacts docker images includes flags for viewing scan results,
including vulnerabilities and other metadata.
Scans return OS vulnerability information for images in Artifact Registry with
supported operating systems and language package
vulnerability information for both supported and unsupported operating
systems.
Image streaming
Unavailable
Stream images in Artifact Registry to
GKE
or Managed Service for Apache Spark
for faster autoscaling, faster pod startup, and reduced latency when
pulling large images.
Cloud Run source
deployment
Unavailable
Source deployment
lets you use a single gcloud CLI command to build a container
image from your source code, store the image in Artifact Registry,
and deploy it to Cloud Run.
Pricing
Container Registry pricing is
based on Cloud Storage usage, including storage and network data transfer.
Since registry hosts are only available in multi-regions, data transfer
costs include deploying images to Google Cloud
Artifact Registry has its own pricing ,
based on storage and network data transfer.
Quota
Container Registry has fixed request limits. Cloud Storage quotas also
apply.
Artifact Registry has per-project and per-user
quotas . Per-user quota is unlimited by
default, but you can configure a per-user cap so that a single user
does not consume too much of the project-level quota.
gcloud command comparison
The following table summarizes Container Registry commands and the equivalent
Artifact Registry commands in the gcloud CLI. Click a link
in the table to view the reference page for the command.
The table does not include all available Artifact Registry commands that
have no equivalent in Container Registry. See the
gcloud artifacts
documentation for the full Artifact Registry command reference.
Operation
Container Registry
Artifact Registry
Create a repository
Not applicable.
gcloud artifacts repositories create
Delete a repository
Not applicable.
gcloud artifacts repositories delete
List images
gcloud container images list
gcloud artifacts docker images list
List tags
gcloud container images list-tags
gcloud artifacts docker tags list
Add a tag
gcloud container images add-tag
gcloud artifacts docker tags add
Delete a tag
gcloud container images untag
gcloud artifacts docker tags delete
Describe images
gcloud container images describe
gcloud artifacts docker images list --include-tags
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
