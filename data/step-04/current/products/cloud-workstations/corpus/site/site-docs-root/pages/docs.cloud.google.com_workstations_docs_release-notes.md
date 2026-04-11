---
title: "Cloud Workstations release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/release-notes
  title: "Cloud Workstations release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Resources
Send feedback
Cloud Workstations release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Cloud Workstations.
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
March 06, 2026
Announcement
The Cloud Workstations base editor
(Code OSS for Cloud Workstations) has been upgraded to 1.108.2 . The last image that offers the
previous version is tagged code-oss-1.104.3 .
February 19, 2026
Feature
You can configure Hyperdisk Balanced High Availability
for persistent directories directly in the Google Cloud console.
This option is available in the Disk type menu when you create or
update workstation configurations for supported machine series.
Additionally, C3 machine types
are available for selection in the Google Cloud console. For the
C3 machine series, which only supports Hyperdisk, the console automatically
selects Hyperdisk as the disk type.
February 18, 2026
Feature
Clicking Launch for a workstation in the Google Cloud console opens a page
that automatically starts the workstation and connects to it. You can bookmark
this page to restart and access your workstation. To start a workstation
without connecting, select Start in the Launch drop-down menu.
February 06, 2026
Feature
Cloud Workstations supports specifying a custom startup script to be executed on
the workstation's host VM during boot.
Provide the custom startup script as a Google Cloud Storage URL, such as
gs://BUCKET/FILE , using the --startup-script-uri flag with the
gcloud workstations configs create and gcloud workstations configs update
commands.
Feature
You can provide custom metadata for a
workstation's host VM.
Use the --instance-metadata flag with the
gcloud workstations configs create
and gcloud workstations configs update
commands. Format the metadata as a comma-separated list of key-value pairs—for
example, --instance-metadata=key1=value1,key2=value2 .
Note that updating metadata replaces all existing custom metadata for the
workstation instance.
January 31, 2026
Feature
Cloud Workstations supports Hyperdisk Balanced High Availability ( hyperdisk-balanced-ha ) for persistent directories on configurations using A3, C3, C4, G4, M3, N4, N4D, and Z3 machine series. You can specify the disk type using the --disk-type flag with the gcloud workstations configs create and gcloud workstations configs update commands.
Cloud Workstations supports A3 machine types with Hyperdisk only. For more details, see Available machine types and Available GPUs .
December 05, 2025
Change
Cloud Workstations predefined images include
Eclipse Temurin JDK 21 and 25. JDK 11 is no longer
pre-installed. To continue using JDK 11,
customize your container images .
Change
Cloud Workstations predefined images include
Node.js 24 (LTS). The previous version, 20.19.6, is no
longer pre-installed. To continue using a previous version, you can
customize your container images
to include it or add a version manager like NVM .
July 07, 2025
Feature
Cloud Workstations is available in the europe-central2 region (Warsaw). For more information, see Locations .
June 09, 2025
Feature
The JetBrains readiness server lets you configure the port it listens on and the timeout when you specify the JETBRAINS_READY_SERVER_PORT and JETBRAINS_READY_SERVER_TIMEOUT environment variables in your workstation environment. For more information about setting environment variables, see Customizing your environment .
June 03, 2025
Change
The JetBrains CLion preconfigured base image uses CLion 2025.1.1
Change
The JetBrains IntelliJ Ultimate preconfigured base image uses IntelliJ-IDEA 2025.1.1
Change
The JetBrains Rider preconfigured base image uses Rider 2025.1.2
Change
The JetBrains GoLand preconfigured base image uses GoLand 2025.1.1
Change
The JetBrains RubyMine preconfigured base image uses RubyMine 2025.1.1
Change
The JetBrains WebStorm preconfigured base image uses WebStorm 2025.1.1
Change
The JetBrains PyCharm preconfigured base image uses PyCharm 2025.1.1.1
Change
The JetBrains PhpStorm preconfigured base image uses PhpStorm 2025.1.1
March 27, 2025
Feature
Cloud Workstations is available in the me-central2 region (Dammam, Saudi Arabia, Middle East). For more information, see Locations .
January 09, 2025
Feature
Cloud Workstations support for cloning of persistent directories is generally available (GA) . For more information, see Clone a workstation . For reference information, see REST workstations and RPC google.cloud.workstations.v1 .
November 18, 2024
Announcement
The Cloud Workstations base editor (Code OSS) has been upgraded to 1.94.2. The last image that offers the previous version is tagged code-oss-1.89.1 .
November 08, 2024
Feature
Cloud Workstations supports granting access to individual ports. For details, see the Grant access to individual Cloud Workstations ports page.
September 23, 2024
Feature
Cloud Workstations is available in the us-west4 region (Las Vegas, Nevada, North America). For more information, see Locations .
September 16, 2024
Announcement
Cloud Workstations preconfigured base images use Ubuntu 24.04. The last images built on Ubuntu 22.04 are tagged with last-ubuntu2204 for building backwards compatible custom images.
Change
Cloud Workstations preconfigured base images default to Python 3.12.3.
August 06, 2024
Feature
If you specify a source workstation during workstation creation, Cloud Workstations supports cloning of persistent directories. For more information, see REST workstations , RPC google.cloud.workstations.v1beta , or gcloud beta workstations create .
June 17, 2024
Feature
Cloud Workstations is available in the australia-southeast2 region (Melbourne, Australia). For more information, see Locations .
June 13, 2024
Feature
Cloud Workstations is available in the asia-northeast3 region (Seoul, South Korea). For more information, see Locations .
June 10, 2024
Change
Workstations that enable nested virtualization are hosted on VMs running Container-Optimized OS (COS) instead of Ubuntu.
May 28, 2024
Change
The Code-OSS preconfigured base image uses version 1.89.1.
May 27, 2024
Feature
Cloud Workstations is available in the us-east5 region (Columbus, Ohio, North America). For more information, see Locations .
Feature
Cloud Workstations is available in the southamerica-east1 region (Osasco, São Paulo, Brazil, South America). For more information, see Locations .
April 29, 2024
Change
Cloud Workstations base images default to Python 3.10.12
Announcement
Cloud Workstations base images use Ubuntu 22.04. The last images built on Ubuntu 20.04 are tagged with last-ubuntu2004 for building backwards compatible custom images.
April 08, 2024
Feature
Code Transformations for Gemini Code Assist are available for Public Preview . You can use an inline text box directly in your code file to do the following:
Generate comment lines to document your code.
Troubleshoot code with issues.
Improve code readability.
Make code more efficient.
You can also view context sources of a generated response in the Gemini: Chat pane.
For more information, see Code with Gemini Code Assist .
March 22, 2024
Feature
Support for GPUs is generally available (GA) . For more information, see Available GPUs .
Feature
Cloud Workstations supports the following machine type:
a2-megagpu-16g
For more information, see Available machine types , REST workstationConfigs , or RPC google.cloud.workstations.v1beta GceInstance .
February 22, 2024
Feature
Cloud Workstations supports Image Streaming , which provides faster workstations startup by reducing image pull time.
February 14, 2024
Feature
Cloud Workstations is available in the europe-west8 region (Milan, Italy, Europe). For more information, see Locations .
January 12, 2024
Feature
Cloud Workstations supports the following machine types:
e2-medium
n1-standard-1
For more information, see Available machine types , REST workstationConfigs , or RPC google.cloud.workstations.v1beta GceInstance .
December 15, 2023
Feature
Support for custom domains is generally available through the gcloud CLI and REST API. To access your workstations, you can specify a trusted, custom domain rather than using the default cloudworkstations.dev domain.
December 11, 2023
Feature
Cloud Workstations supports the following machine type:
n2d-highmem
For more information, see Available machine types , REST workstationConfigs , or RPC google.cloud.workstations.v1beta GceInstance .
November 07, 2023
Feature
Cloud Workstations is available in the asia-east2 region (Hong Kong, APAC). For more information, see Locations .
November 06, 2023
Change
The Code-OSS preconfigured base image uses version 1.83.1.
November 03, 2023
Feature
Support for custom domains is available in preview through the gcloud CLI and REST API. To access your workstations, you can specify a trusted, custom domain rather than using the default cloudworkstations.dev domain.
November 01, 2023
Feature
Duet AI for Cloud Workstations is available. Use Duet AI, your AI-powered collaborator, to accomplish tasks more effectively and efficiently. Duet AI provides contextualized responses to your prompts to help guide you on what you're trying to do with your code. It also shares source citations regarding which documentation and code samples the assistant used to generate its responses.
If you use the Code - OSS base image, you can use Duet AI in the Cloud Workstations base editor. For more information, see the Duet AI in Google Cloud overview and Code with Duet AI assistance .
October 25, 2023
Feature
Cloud Workstations is available in the northamerica-northeast1 region (Montréal, Québec, North America). For more information, see Locations .
October 02, 2023
Feature
If you use the latest preconfigured base images for JetBrains IDEs, the .vmoptions and .properties files persist across workstations. For more information, see Customize JetBrains IDE vmoptions and properties .
September 11, 2023
Change
The JetBrains GoLand preconfigured base image uses GoLand 2023.2.1 .
Change
The JetBrains IntelliJ Ultimate preconfigured base image uses IntelliJ-IDEA 2023.2.1 .
Change
The JetBrains PhpStorm preconfigured base image uses PhpStorm 2023.2.1 .
Change
The JetBrains PyCharm Professional preconfigured base image uses PyCharm Professional 2023.2.1 .
Change
The JetBrains CLion preconfigured base image uses CLion 2023.2.1 .
Change
The JetBrains WebStorm preconfigured base image uses WebStorm 2023.2.1 .
Change
The JetBrains RubyMine preconfigured base image uses RubyMine 2023.2.1 .
August 29, 2023
Feature
Duet AI for Cloud Workstations is available in Preview . Use Duet AI, your AI-powered collaborator, to accomplish tasks more effectively and efficiently. Duet AI provides contextualized responses to your prompts to help guide you on what you're trying to do with your code. It also shares source citations regarding which documentation and code samples the assistant used to generate its responses.
If you use the Code - OSS base image, you can use Duet AI in the Cloud Workstations base editor. For more information, see the Duet AI in Google Cloud overview and Code with Duet AI assistance .
August 26, 2023
Feature
Posit Workbench (including RStudio Pro) integration is generally available ( GA ). For more information, see Develop code using Posit Workbench .
August 15, 2023
Change
The JetBrains PyCharm Professional preconfigured base image uses Python version 3.8 as the default for python , python3 , pip , and pip3 . However, Python version 3.10 remains available.
July 21, 2023
Feature
Cloud Workstations is available in the europe-west12 region (Turin, Italy, Europe). For more information, see Locations .
July 04, 2023
Feature
Cloud Workstations is available in the australia-southeast1 region (Sydney, Australia, APAC). For more information, see Locations .
June 21, 2023
Feature
The following Google Cloud CLI commands are generally available (GA):
gcloud workstations
gcloud workstations configs
gcloud workstations clusters
June 14, 2023
Change
The JetBrains CLion preconfigured base image uses CLion 2023.1.3 .
June 13, 2023
Change
The Available GPUs page contains additional instructions for using the gcloud CLI or curl to specify a GPU machine type.
May 24, 2023
Feature
Cloud Workstations adds Google Cloud console support for the me-west1 region (Tel Aviv, Israel, Middle East). For more information, see Locations .
May 10, 2023
Announcement
Cloud Workstations is generally available ( GA ) and is backed by a Service Level Agreement (SLA) .
Feature
This release includes support for the following features:
API and gcloud CLI support for the me-west1 region (Tel Aviv, Israel, Middle East).
API support for GPUs is available in preview .
Terraform support is available in preview .
Posit Workbench (including RStudio Pro) integration is available in preview .
BeyondCorp Enterprise integration for the Cloud Workstations API is available in preview .
May 05, 2023
Feature
Cloud Workstations supports the following machine types:
n1-standard-64
n1-standard-96
For more information, see Available machine types , REST workstationConfigs , or RPC google.cloud.workstations.v1beta GceInstance .
April 25, 2023
Change
The Code-OSS preconfigured base image uses version 1.77.3.
April 24, 2023
Change
The JetBrains CLion preconfigured base image uses CLion 2023.1.1 .
Change
The JetBrains WebStorm preconfigured base image uses WebStorm 2023.1 .
Change
The JetBrains IntelliJ Ultimate preconfigured base image uses IntelliJ-IDEA 2023.1 .
Change
The JetBrains GoLand preconfigured base image uses GoLand 2023.1 .
Change
The JetBrains PhpStorm preconfigured base image uses PhpStorm 2023.1 .
Change
The JetBrains Rider preconfigured base image uses Rider 2023.1 .
Change
The JetBrains RubyMine preconfigured base image uses RubyMine 2023.1 .
Change
The JetBrains PyCharm Professional preconfigured base image uses PyCharm Professional 2023.1 .
April 21, 2023
Feature
Cloud Workstations supports the following machine types:
n1-standard-2
n1-standard-8
n1-standard-16
n1-standard-32
n2-standard-2
n2-standard-4
For more information, see Available machine types , REST workstationConfigs , or RPC google.cloud.workstations.v1beta GceInstance .
April 03, 2023
Change
Cloud Workstations is beginning the migration of preconfigured base images to Ubuntu as their base OS. The last images built using Debian are tagged with :last-debian in Artifact Registry to allow more time for you to make adjustments to custom images.
Change
The JetBrains PhpStorm preconfigured base image uses PhpStorm 2022.3.3 .
Change
The JetBrains CLion preconfigured base image uses CLion 2022.3.3 .
Change
The JetBrains PyCharm Professional preconfigured base image uses PyCharm Professional 2022.3.3 .
Change
The JetBrains GoLand preconfigured base image uses GoLand 2022.3.3 .
Change
The JetBrains Rider preconfigured base image uses Rider 2022.3.3 .
Change
The JetBrains IntelliJ Ultimate preconfigured base image uses IntelliJ-IDEA 2022.3.3 .
Change
The JetBrains WebStorm preconfigured base image uses WebStorm 2022.2.3 .
Change
The JetBrains RubyMine preconfigured base image uses RubyMine 2022.3.3 .
March 31, 2023
Feature
You can use a pre-customized snapshot as the source of a Persistent Disk in Cloud Workstations. For more information, see About disk snapshots . See also the sourceSnapshot within GceRegionalPersistentDisk field added to the following REST API resources: workstation configurations , and source_snapshot in the following RPC resources: workstations.v1beta .
Feature
Cloud Workstations is available in the asia-northeast1 region (Tokyo, Japan, APAC). For more information, see Locations .
March 30, 2023
Feature
You can use container output logging to view standard output and standard error logs generated by a workstation container.
March 29, 2023
Feature
Cloud Workstations is available in the following regions:
asia-south1 (Mumbai, India APAC)
us-east4 (Ashburn, Virginia, North America)
For more information, see Locations .
March 20, 2023
Feature
Newly-created clusters write vm_assignments and disk_assignments platform logs to Cloud Logging, indicating when VM instances and persistent disks are allocated to a workstation.
March 17, 2023
Feature
Cloud Workstations is available in the following regions:
europe-west6 (Zurich, Switzerland, Europe)
europe-west9 (Paris, France, Europe)
For more information, see Locations .
February 07, 2023
Feature
You can use customer-managed encryption keys (CMEK) to protect
Persistent Disks in Cloud Workstations. CMEK in Cloud Workstations
is available in Beta. For more information, see
Encrypt workstation resources using customer-managed encryption keys .
January 31, 2023
Feature
Cloud Workstations makes the following machine types available:
n2-standard-8
n2-standard-16
n2-standard-32
For more information, see Available machine types , REST workstationConfigs , or RPC google.cloud.workstations.v1beta GceInstance .
January 17, 2023
Feature
You can apply custom labels to Cloud Workstations resources.
For more information, see Label resources and Customize workstation configurations .
See also the labels field added to the following REST API resources:
workstation clusters ,
workstation configurations ,
workstations , and the following RPC resources:
location and
workstations.v1beta .
October 28, 2022
Change
The JetBrains RubyMine preconfigured base image uses RubyMine 2022.2.3 .
Change
The JetBrains PyCharm Professional preconfigured base image uses PyCharm Professional 2022.2.3 .
Change
The Code-OSS preconfigured base image uses version 1.73.1.
Change
The JetBrains WebStorm preconfigured base image uses WebStorm 2022.2.3 .
Change
The JetBrains PhpStorm preconfigured base image uses PhpStorm 2022.2.3 .
Change
The JetBrains IntelliJ Ultimate preconfigured base image uses IntelliJ-IDEA 2022.2.3 .
Change
The JetBrains Rider preconfigured base image continues to use Rider 2022.2.3 . It appears in this list of JetBrains IDEs for completeness.
Change
The JetBrains CLion preconfigured base image uses CLion 2022.2.4 .
Change
The JetBrains GoLand preconfigured base image uses GoLand 2022.2.4 .
October 11, 2022
Announcement
Cloud Workstations is available in Preview . For more information about using Cloud Workstations, see the documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
