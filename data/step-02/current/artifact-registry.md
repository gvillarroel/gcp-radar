# Artifact Registry

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 74
Unique features: 75

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-01-21 | Artifact Registry regional availability |  | Artifact Registry is now available in the asia-southeast3 (Bangkok) region; Artifact Registry is now available in the europe-north2 (Stockholm) region. |
| 2026-01-20 | Artifact Registry package version fingerprints |  | Artifact Registry now calculates fingerprints for every pushed package version so users can verify package integrity when moving artifacts between Google Cloud systems. |
| 2025-11-24 | Artifact Registry artifact export to Cloud Storage |  | Artifact Registry introduced ExportArtifact() support to export artifacts to a Cloud Storage bucket. |
| 2025-11-04 | Artifact Registry Ruby gems repository support |  | Artifact Registry added support for managing Ruby gems repositories. |
| 2025-09-23 | Artifact Analysis layer-based image scanning |  | Artifact Analysis now supports viewing vulnerability metadata for individual image layers of container images. |
| 2025-04-15 | Artifact Registry attachments |  | Artifact Registry introduced preview support for attachments across all repository formats to store metadata related to artifacts. |
| 2025-04-09 | Gemini Cloud Assist for Artifact Registry |  | Artifact Registry gained Gemini Cloud Assist integration to provide assisted insights about container images. |
| 2025-03-14 | Go remote and virtual repositories in Artifact Registry |  | Go remote repositories and virtual repositories in Artifact Registry reached general availability. |
| 2025-03-14 | Security Command Center ingestion of Artifact Analysis findings |  | Security Command Center now ingests Artifact Analysis findings from Artifact Registry image scans and supports exporting them to BigQuery. |
| 2025-02-28 | Artifact Registry Cloud KMS Autokey integration |  | Artifact Registry can now be used with Cloud KMS Autokey for customer-managed encryption key operations. |
| 2024-11-19 | Artifact Registry per-repository vulnerability scanning |  | Artifact Registry now allows automatic vulnerability scanning to be enabled or disabled on individual repositories. |
| 2024-11-11 | Artifact Registry Migration Admin IAM role |  | Artifact Registry introduces the Container Registry to Artifact Registry Migration Admin role to simplify IAM permissions for migration. |
| 2024-10-21 | Artifact Analysis manual vulnerability scanning for package types |  | Artifact Analysis now supports manual vulnerability scanning for additional package ecosystems and distributions via its on-demand scanning capability. |
| 2024-10-21 | Artifact Analysis vulnerability scanning for operating systems |  | Artifact Analysis now supports scanning vulnerabilities in additional container image operating systems through the Container Scanning API. |
| 2024-10-18 | Artifact Registry remote repository upstream sources |  | Artifact Registry remote repositories now support using standard Artifact Registry repositories as upstreams for supported formats. |
| 2024-10-15 | Artifact Registry organization policy constraints |  | Artifact Registry now supports organization policy constraints for governance configuration. |
| 2024-10-09 | Artifact Registry artifact download rules |  | Artifact Registry introduces previewed download rules that can restrict artifact downloads at repository and package levels. |
| 2024-10-03 | OCI v1.1 support for Docker repositories |  | Artifact Registry adds OCI specification v1.1 support in Docker format repositories, including support for image metadata attachments. |
| 2024-09-30 | Regionalized Artifact Analysis metadata storage |  | Artifact Analysis is rolling out regional and multi-region metadata storage endpoints to align Container Analysis metadata with repository location. |
| 2024-08-30 | Artifact Registry metrics and logs |  | Artifact Registry now records project-level metrics and logs that are viewable in Cloud Monitoring and Cloud Logging. |
| 2024-05-24 | Artifact Registry cleanup policies |  | Cleanup policies are generally available in Artifact Registry to automatically delete unwanted artifacts while retaining those that should be kept; Cleanup policies allow Artifact Registry to automatically delete unneeded artifacts while retaining artifacts you want to keep. |
| 2024-05-10 | Artifact Registry generic repositories |  | Artifact Registry now supports generic repositories for storing and managing versioned, immutable artifacts that do not follow a specific package format. |
| 2024-04-19 | Artifact Registry download files |  | Artifact Registry supports downloading individual files from standard and remote repositories without configuring authentication for format-specific tooling. |
| 2024-04-18 | Artifact Registry immutable tags for Docker repositories |  | Docker repositories can enforce immutable tags so that a tag’s referenced image digest cannot be changed. |
| 2024-04-02 | Artifact Analysis language ecosystem vulnerability scanning |  | Artifact Analysis can automatically scan container images for Ruby, Rust, .NET, and PHP vulnerabilities in addition to existing operating-system and package-language checks. |
| 2024-03-25 | Artifact Registry Software Bill of Materials (SBOM) |  | Artifact Registry provides software bill of materials (SBOM) generation and access for container images. |
| 2024-03-15 | Artifact Registry remote repository upstream authentication |  | Artifact Registry remote repositories support basic authentication to user-defined and preset upstream sources for Docker, Maven, npm, and Python repositories. |
| 2024-01-31 | Artifact Registry region expansion to africa-south1 |  | Artifact Registry is available in the Africa-South1 (Johannesburg) region. |
| 2024-01-12 | Artifact Registry tags |  | Artifact Registry supports tags as key-value labels for grouping and organizing repositories and other resources for reporting, auditing, and access control. |
| 2023-10-31 | Artifact Registry Docker Hub remote repository authentication |  | Artifact Registry remote repositories support authentication when using Docker Hub as an upstream source. |
| 2023-10-27 | Artifact Registry remote repositories |  | Artifact Registry remote repositories are available for proxying external package sources and caching requested package versions; Artifact Registry added remote repositories in preview, which cache artifacts from external sources such as Docker Hub, Maven Central, PyPI, and the npm registry. |
| 2023-10-27 | Artifact Registry virtual repositories |  | Artifact Registry virtual repositories provide a single access point to retrieve artifacts from one or more upstream repositories; Artifact Registry added virtual repositories in preview to provide a unified access point across multiple remote and standard repositories. |
| 2023-09-13 | Artifact Registry Apt repository HTTP access |  | Artifact Registry supports HTTP access for Apt repositories. |
| 2023-08-29 | Artifact Analysis container image SBOM export |  | Artifact Analysis now supports exporting consolidated SBOMs for scanned Artifact Registry containers in SPDX format, with support for ingesting external SPDX or CycloneDX SBOMs. |
| 2023-08-29 | Artifact Analysis Python and Node.js vulnerability scanning |  | Artifact Analysis can now automatically scan Artifact Registry container images for Python and Node.js (npm) vulnerabilities, in addition to operating system vulnerabilities, when the Container Scanning API is enabled. |
| 2023-08-29 | Artifact Analysis VEX support |  | Artifact Analysis supports Vulnerability Exploitability eXchange (VEX) statements for container images to help triage known vulnerabilities. |
| 2023-08-22 | Artifact Registry availability in europe-west10 region |  | Artifact Registry became available in the europe-west10 (Berlin) region. |
| 2023-08-16 | Artifact Registry remote repositories for OS packages |  | Artifact Registry introduced remote repositories for operating-system packages as a preview feature, proxying external sources such as Docker Hub, Maven Central, and PyPI. |
| 2023-06-30 | Artifact Registry Go repositories |  | Go repositories in Artifact Registry moved to generally available status. |
| 2023-03-30 | Artifact Registry availability in me-central1 region |  | Artifact Registry became available in the me-central1 (Doha) region. |
| 2023-03-29 | Artifact Registry availability in europe-west12 region |  | Artifact Registry became available in the europe-west12 (Turin) region. |
| 2023-03-28 | Artifact Registry gcr.io domain support |  | Artifact Registry repositories with gcr.io domain support were introduced in general availability, enabling automatic redirection of gcr.io host requests. |
| 2023-03-23 | Immutable tags for Docker repositories |  | Docker repositories gained a preview immutable tags setting that prevents changing the digest referenced by an image tag. |
| 2023-02-09 | Container Analysis Java and Go vulnerability scanning |  | Container Analysis can now automatically scan Artifact Registry container images for Java and Go vulnerabilities, in addition to operating system vulnerabilities, when the Container Scanning API is enabled. |
| 2022-10-11 | Artifact Registry automatic SBOM generation |  | Artifact Registry automatic container scanning now generates software bill of materials (SBOM) dependency metadata when images are pushed and the Container Scanning API is enabled. |
| 2022-09-13 | Artifact Registry regional availability in me-west1 |  | Artifact Registry is available in the me-west1 region (Tel Aviv, Israel). |
| 2022-08-25 | Container Analysis Java and Go vulnerability scanning for Artifact Registry images |  | Container Analysis automatic scanning for Artifact Registry container images now includes Java and Go vulnerability detection, in addition to operating system vulnerabilities. |
| 2022-07-02 | Artifact Registry regional availability in us-south1 |  | Artifact Registry is available in the us-south1 region (Dallas, United States). |
| 2022-06-09 | Cloud Logging audit logs for Artifact Registry repositories |  | Audit logs for Maven, npm, and Python repositories in Artifact Registry are now available in Cloud Logging. |
| 2022-05-25 | Apt and Yum repository support in Artifact Registry |  | Apt and Yum repositories are now generally available in Artifact Registry. |
| 2022-05-24 | Artifact Registry regional availability in us-east5 |  | Artifact Registry is available in the us-east5 region (Columbus, United States). |
| 2022-05-10 | Artifact Registry regional availability in europe-southwest1 |  | Artifact Registry is available in the europe-southwest1 region (Madrid, Spain). |
| 2022-05-03 | Artifact Registry regional availability in europe-west9 |  | Artifact Registry is available in the europe-west9 region (Paris, France). |
| 2022-04-20 | Artifact Registry regional availability in europe-west8 |  | Artifact Registry is available in the europe-west8 region (Milan, Italy). |
| 2022-03-25 | Artifact Registry repository tagging |  | Artifact Registry now supports attaching tags to repositories for grouping repositories and other resources across Google Cloud. |
| 2022-02-15 | On-Demand Scanning for Go packages |  | On-Demand Scanning for Go packages in Artifact Registry is generally available for container images to identify Go package vulnerabilities. |
| 2021-11-15 | Artifact Registry gcr.io repositories (Preview) |  | Artifact Registry adds Preview support for repositories using the gcr.io domain. |
| 2021-10-04 | Maven repository release/snapshot version policy |  | Artifact Registry supports choosing a release or snapshot version policy when creating Maven repositories. |
| 2021-09-08 | Maven repositories generally available |  | Support for Maven repositories in Artifact Registry reaches general availability. |
| 2021-09-08 | npm repositories generally available |  | Support for npm repositories in Artifact Registry reaches general availability. |
| 2021-09-08 | Python repositories generally available |  | Support for Python repositories in Artifact Registry reaches general availability. |
| 2021-08-03 | Apt repositories in Preview |  | Artifact Registry introduces Apt repositories in Preview. |
| 2021-08-03 | Yum repositories in Preview |  | Artifact Registry introduces Yum repositories in Preview. |
| 2021-07-23 | Artifact Registry Cloud External Key Manager integration |  | Artifact Registry adds support for Cloud External Key Manager when using customer-managed encryption keys. |
| 2021-07-13 | On-Demand Scanning for Java packages |  | Artifact Registry enables generally available On-Demand Scanning for Java packages to identify vulnerabilities in container images. |
| 2021-06-04 | Maven repositories in Preview |  | Artifact Registry adds Preview support for Maven repositories. |
| 2021-06-04 | npm repositories in Preview |  | Artifact Registry adds Preview support for npm repositories. |
| 2021-06-04 | Python repositories in Preview |  | Artifact Registry adds Preview support for Python repositories. |
| 2021-06-03 | Artifact Registry Access Transparency |  | Artifact Registry adds Access Transparency support to provide logs of Google staff actions on customer data. |
| 2021-05-03 | Container image audit logs in Cloud Audit Logs |  | Artifact Registry adds Cloud Audit Logs support for container image operations. |
| 2021-02-26 | Private Python repositories support |  | Artifact Registry introduces alpha support for private Python package repositories. |
| 2021-02-02 | On-Demand Scanning for Docker images |  | Artifact Registry makes On-Demand Scanning available in Preview for manual scanning of Docker container images. |
| 2020-08-17 | Artifact Registry Pub/Sub notifications for repository changes |  | Artifact Registry adds Pub/Sub-based notifications for changes in Docker repositories. |
| 2020-07-14 | Artifact Registry customer-managed encryption keys |  | Artifact Registry now supports using Customer-Managed Encryption Keys (CMEK) to protect repository data. |
| 2020-03-16 | Artifact Registry beta launch |  | Artifact Registry entered beta as the container-and-package registry successor with support for Docker, Maven, and npm package formats. |

Source file slug: `artifact-registry.md`

