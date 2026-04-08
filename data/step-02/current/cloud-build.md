# Cloud Build

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 106
Unique features: 115

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-30 | Cloud Build generic artifacts integration |  | Cloud Build now supports uploading generic artifacts to generic repositories and downloading those repositories as build dependencies. |
| 2026-03-16 | Cloud Build OCI image publishing to Artifact Registry |  | Cloud Build now supports uploading OCI images from builds to Artifact Registry and exposing them in build artifact views. |
| 2025-09-29 | Cloud Build Developer Connect triggers |  | Cloud Build now offers generally available build triggers that run from repositories connected via Developer Connect across Console, gcloud, API, and Terraform; Cloud Build now supports creating build triggers for repositories connected through Developer Connect. |
| 2025-09-02 | Cloud Build dark theme |  | Cloud Build now supports a dark theme in the console interface. |
| 2025-08-15 | Cloud Build private pool C3 and N2D machine families |  | Cloud Build private pools now support both the C3 and N2D machine families. |
| 2025-08-15 | Cloud Build private pool monthly cost estimate display |  | Cloud Build private pool creation and editing pages now show a monthly price estimate based on the selected machine type configuration. |
| 2025-04-22 | Cloud Build build dependency declarations |  | Cloud Build now supports declaring build dependencies directly in the build configuration file. |
| 2025-03-21 | Cloud Build custom Pub/Sub build notification topic |  | Cloud Build now supports configuring a custom Pub/Sub topic for build notifications in the build config file. |
| 2025-01-21 | Cloud Build build log field mapping |  | Cloud Build now supports mapping selected build log fields to Cloud Logging entry fields when logs are sent. |
| 2025-01-17 | Cloud Build Go module publishing to Artifact Registry |  | Cloud Build now supports building and pushing Go modules to Artifact Registry. |
| 2024-08-19 | Cloud Build custom organization policies |  | Cloud Build now supports custom organization policies for fine-grained organizational constraints at org, folder, and project levels. |
| 2024-07-09 | Cloud Build Bitbucket repository connection via Terraform |  | Cloud Build users can connect to Bitbucket Cloud and Bitbucket Data Center hosts and add repositories using the Google Cloud Terraform provider. |
| 2024-06-25 | Cloud Build SLSA v1.0 build provenance support |  | Cloud Build can generate verifiable build provenance metadata compliant with SLSA v1.0 for triggered builds using the requestedVerifyOption. |
| 2024-03-07 | Cloud Build repositories (2nd generation) Bitbucket integration |  | Cloud Build repositories (2nd generation) added integration support for Bitbucket Cloud and Bitbucket Data Center. |
| 2023-10-11 | Configurable private connection IP range for Cloud Build Bitbucket Data Center repositories |  | Cloud Build now supports configuring private-connection IP range size and starting address for Bitbucket Data Center using peeredNetworkIpRange. |
| 2023-09-07 | Cloud Build repositories (1st generation) Bitbucket trigger support |  | Cloud Build repositories (1st generation) now support manual, webhook, and Pub/Sub triggers for Bitbucket Server and Bitbucket Data Center repos. |
| 2023-08-29 | Cloud Build user-specified service account identity tokens |  | Cloud Build can generate Google-signed OIDC identity tokens for user-specified service accounts during build execution for service-to-service authorization. |
| 2023-08-18 | Cloud Build SLSA v1.0 provenance attestations |  | Cloud Build now generates repository-event-triggered provenance attestations that meet the SLSA v1.0 specification. |
| 2023-07-20 | Cloud Build repositories (2nd generation) general availability |  | Cloud Build repositories (2nd generation) reached general availability. |
| 2023-07-20 | Cloud Build repositories (2nd generation) native GitHub and GitLab integrations |  | Cloud Build repositories (2nd generation) added direct integration with GitHub, GitHub Enterprise, GitLab, and GitLab Enterprise Edition. |
| 2023-07-20 | Terraform support for Cloud Build repositories (2nd generation) |  | Cloud Build repositories (2nd generation) gained end-to-end Terraform support. |
| 2023-06-23 | Automated npm package upload to Artifact Registry from Cloud Build |  | Cloud Build can automatically upload npm packages to Artifact Registry. |
| 2023-06-23 | Cloud Build Security Insights panel |  | Cloud Build introduced a Security Insights panel showing SLSA levels, vulnerabilities, and build detail metrics. |
| 2023-06-23 | Cloud Build SLSA Level 3 build provenance |  | Cloud Build can generate build provenance at SLSA Level 3. |
| 2023-05-11 | and Pub/Sub triggers |  | Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers. |
| 2023-05-11 | Cloud Build repositories (2nd generation) manual |  | Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers. |
| 2023-05-11 | webhook |  | Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers. |
| 2023-05-09 | Cloud Build resource location restrictions via Organization Policy |  | Cloud Build can restrict creation of builds, triggers, and repositories to specific locations through an Organization Policy constraint. |
| 2023-04-26 | Cloud Build build continuation on step failure |  | Cloud Build can continue a build execution when specified steps fail by using allowFailure and allowExitCodes settings. |
| 2023-04-20 | Cloud Build allowed locations organization policy |  | Cloud Build now supports an organization policy that restricts where new Cloud Build resources can be created. |
| 2023-04-04 | Cloud Build SLSA provenance for standalone Maven and Python artifacts |  | Cloud Build can generate SLSA build provenance metadata for standalone Maven and Python packages via new config file fields. |
| 2023-03-20 | Cloud Build default logs bucket in customer project |  | Cloud Build supports using default build logs buckets in a user project’s same-region location through the defaultLogsBucketBehavior setting. |
| 2023-02-08 | Cloud Build repositories 2nd gen Terraform repository connections management |  | Cloud Build repositories (2nd gen) now support creating and managing repository connections through Terraform. |
| 2023-01-23 | Cloud Build repositories 2nd gen repository connection management interfaces |  | Cloud Build repositories (2nd gen) now support creating and managing repository connections via Cloud Console, gcloud, and the Cloud Build API. |
| 2023-01-18 | Cloud Build private pool peered VPC IP range control |  | Cloud Build private pools can now set peeredNetworkIpRange to consume fewer IP addresses in peered VPCs. |
| 2022-12-27 | and webhook |  | Cloud Build notifications for email, BigQuery, and webhooks can now be customized using notifier templates. |
| 2022-12-27 | BigQuery |  | Cloud Build notifications for email, BigQuery, and webhooks can now be customized using notifier templates. |
| 2022-12-27 | Cloud Build notifier templates for email |  | Cloud Build notifications for email, BigQuery, and webhooks can now be customized using notifier templates. |
| 2022-11-30 | Cloud Build SLSA provenance for standalone Java and Python artifacts |  | Cloud Build can generate SLSA build provenance metadata for standalone Java and Python packages using new config file fields when publishing to Artifact Registry. |
| 2022-11-18 | Cloud Build continue-on-failure build execution |  | Cloud Build can continue a build execution when selected steps fail by using allowFailure and allowExitCodes options. |
| 2022-11-07 | Cloud Build Slack notification templates |  | Cloud Build now supports customizable Slack notifications using notifier templates. |
| 2022-10-11 | Cloud Build build security insights panel |  | Cloud Build now shows build security information for Artifact Registry artifacts in the console’s Build History Security insights panel. |
| 2022-10-07 | Cloud Build GitLab Enterprise Edition repository integration |  | Cloud Build can build repositories from GitLab Enterprise Edition, including private network-hosted instances. |
| 2022-09-15 | Cloud Build GitHub Issues notifier |  | Cloud Build includes a GitHub Issues notifier that creates GitHub issues in response to build events. |
| 2022-09-13 | Cloud Build manual triggers via gcloud |  | Cloud Build now supports manually triggering builds from the gcloud CLI. |
| 2022-09-13 | Cloud Build trigger log delivery to GitHub |  | Cloud Console can configure build triggers to send build logs to GitHub or GitHub Enterprise. |
| 2022-09-09 | Cloud Build script field |  | Cloud Build's script field is generally available for defining build steps with shell scripts or other scripting languages; Cloud Build supports a script field for executing shell scripts within build steps as a preview feature. |
| 2022-06-27 | Cloud Build regional build triggers |  | Cloud Build build triggers now support region-specific operation; Cloud Build build triggers support regional operation in preview. |
| 2022-06-27 | Cloud Build regional default pools |  | Cloud Build default pools now support region-specific execution; Cloud Build default pools support regional builds in preview. |
| 2022-05-23 | Cloud Build Google Chat notifier |  | Cloud Build can send build status notifications to Google Chat through a dedicated notifier. |
| 2022-05-17 | Cloud Build log viewing in GitHub |  | Cloud Build users can view build logs directly inside GitHub or GitHub Enterprise. |
| 2022-05-10 | Cloud Build attestors |  | Cloud Build attestors are available to secure image deployments through artifact verification. |
| 2022-02-18 | Cloud Build external integration organization policy |  | Cloud Build now supports an organization policy to control builds triggered from external integrations such as GitHub. |
| 2022-02-18 | Cloud Build VPC Service Controls support |  | Cloud Build can be used within VPC Service Controls perimeters for added network-based project isolation. |
| 2022-02-14 | Build trigger service account configuration |  | Build triggers can be configured to run using a user-specified service account; Build triggers can be configured to execute with a specific service account. |
| 2022-02-07 | Cloud Build Bitbucket Server and Bitbucket Data Center integration |  | Cloud Build supports building repositories hosted on Bitbucket Server and Bitbucket Data Center, including on-premises deployments. |
| 2021-10-12 | Cloud Build build integrity features |  | Build integrity features add build verification using binary authorization and build provenance records to secure image deployments. |
| 2021-09-07 | Buildpacks support for Cloud Build triggers |  | Cloud Build triggers now support buildpacks-based builds. |
| 2021-09-01 | Build triggers with VPC Service Controls |  | Cloud Build build triggers can run inside VPC Service Controls perimeters. |
| 2021-08-18 | Cloud Build approvals |  | Cloud Build approvals allow trigger executions to require explicit user approval before a build runs. |
| 2021-08-09 | Cloud Build GitHub Enterprise triggers |  | Cloud Build can create triggers for repositories hosted in GitHub Enterprise, including on-premises instances. |
| 2021-07-27 | Cloud Build private pools |  | Cloud Build private pools provide dedicated regional build environments with greater customization and private network access. |
| 2021-04-27 | Cloud Build manual triggers |  | Cloud Build manual triggers allow users to run builds on demand or by schedule; Manual build triggers are available in Cloud Build and can be created and run directly from the Cloud Console. |
| 2021-04-27 | Cloud Build webhook triggers |  | Cloud Build webhook triggers enable automated builds from repositories hosted on GitLab, Bitbucket Cloud, and Bitbucket Server; Cloud Build now supports triggers that run builds from webhook events, including events from external source code management systems. |
| 2021-03-10 | Cloud Build Pub/Sub triggers |  | Cloud Build can execute builds in response to events published to a Pub/Sub topic. |
| 2021-02-03 | Cloud Build Secret Manager environment variables |  | Cloud Build can be configured to access secrets stored in Secret Manager through environment variables. |
| 2021-01-15 | Cloud Functions build visibility in Cloud Build History |  | Regionalized Cloud Functions builds are now visible in the Cloud Build History UI. |
| 2021-01-11 | Cloud Build user-specified build service accounts |  | Users can configure custom service accounts for Cloud Build to use when running builds. |
| 2020-12-15 | Cloud Build scheduled manual triggers |  | Cloud Build supports manual triggers that can run builds at a specified time. |
| 2020-12-15 | Cloud Build service level agreement |  | Cloud Build published a service-level agreement committing to at least 99.95% monthly uptime. |
| 2020-11-19 | Cloud Build BigQuery metrics notifier |  | Cloud Build can export build metrics to BigQuery via the BigQuery notifier. |
| 2020-11-04 | Cloud Native Buildpacks support |  | Cloud Build can build containers without requiring a Dockerfile or Cloud Build configuration file by using Cloud Native Buildpacks. |
| 2020-08-17 | Cloud Build GitHub App trigger name visibility |  | The Cloud Build GitHub App now shows trigger names on GitHub, including within pull requests. |
| 2020-06-30 | Cloud Build open-source notifiers |  | Open-source notifiers for Slack and SMTP are now generally available for build status notifications. |
| 2020-06-22 | Cloud Build substitution variable enhancements |  | Cloud Build substitution variables now support referencing other variables, bash-style string operations, and trigger event payload bindings. |
| 2020-03-12 | Cloud Build Create trigger page |  | The Cloud Build Create trigger page in the Google Cloud Console was updated. |
| 2020-02-06 | Cloud Build Dashboard |  | The Cloud Build Dashboard became generally available, providing a high-level overview of recent builds for build triggers. |
| 2020-02-06 | Cloud Build GitHub App triggers |  | Cloud Build GitHub App triggers became generally available; Cloud Build GitHub App triggers moved to beta release status. |
| 2020-01-30 | Cloud Build build details page |  | The Cloud Build build details page in the Google Cloud Platform Console was updated. |
| 2020-01-30 | Cloud Build build history page |  | The Cloud Build build history page in the Google Cloud Platform Console was updated. |
| 2019-12-13 | GitHub App trigger pull request build cancellation |  | Closing pull requests now cancels running builds associated with GitHub App triggers. |
| 2019-09-26 | Cloud Build GitHub pull request substitution variables |  | Cloud Build added substitution variable values available for GitHub pull requests. |
| 2019-09-26 | GitHub App trigger Checks API integration |  | Cloud Build posts GitHub App trigger results to GitHub using the GitHub Checks API. |
| 2019-09-26 | GitHub pull request build triggers |  | Cloud Build supports creating triggers that start builds on GitHub pull requests. |
| 2019-08-29 | Cloud Build CI/CD developer hub |  | Cloud Build made the CI/CD developer hub available. |
| 2019-08-29 | Cloud Build settings page |  | Cloud Build added a Settings page in the Google Cloud Console for managing service account permissions. |
| 2019-06-27 | Cloud Build global environment variables |  | Cloud Build allows environment variables to be defined globally for all build steps in a build. |
| 2019-06-20 | Cloud Build CMEK support |  | Cloud Build added support for customer-managed encryption keys (CMEK) for compliance. |
| 2019-06-19 | gke-deploy builder |  | Cloud Build introduced the gke-deploy builder. |
| 2019-05-27 | Inverted-regex build triggers on specified branches |  | Cloud Build build triggers can use inverted regex matching and be restricted to specified branches. |
| 2019-02-12 | Cloud Build GitHub App repository-to-project mapping |  | The Cloud Build GitHub App added support for mapping repositories to Google Cloud projects. |
| 2018-07-24 | Build trigger filepath filters |  | Cloud Build triggers can now run only when changes occur in specified files or subdirectories. |
| 2018-07-24 | Cloud Build console top-level navigation |  | A new top-level Cloud Build menu was added to the Google Cloud console. |
| 2018-07-24 | Cloud Build gcloud command group |  | Cloud Build gcloud CLI commands were updated to use the `gcloud builds` command group. |
| 2018-07-24 | Cloud Build GitHub App (initial release) |  | Cloud Build introduced a new GitHub App. |
| 2018-07-24 | Cloud Build rebranding from Container Builder |  | Container Builder was renamed to Cloud Build. |
| 2018-07-24 | Non-container artifact storage in Cloud Storage |  | Cloud Build added support for storing non-container artifacts in Cloud Storage buckets. |
| 2018-02-28 | Build step timeout and status reporting |  | Cloud Build added timeout and status reporting for build steps. |
| 2018-01-10 | gcloudignore support |  | Cloud Build added support for `.gcloudignore` files. |
| 2017-11-02 | Community-contributed build steps |  | Cloud Build added support for community-contributed build steps. |
| 2017-10-28 | Cloud Build Jenkins plugin |  | A Cloud Build plugin for Jenkins became available. |
| 2017-10-25 | Cloud Build 8-vCPU and 32-vCPU machine types |  | Cloud Build added new machine types with 8 vCPUs and 32 vCPUs. |
| 2017-10-25 | Cloud Build custom disk size |  | Cloud Build added an option to set a custom disk size. |
| 2017-08-03 | Build step persistent volumes |  | Cloud Build added support for volumes that persist specified paths across build steps. |
| 2017-07-26 | cloud-build-local tool |  | Cloud Build introduced `cloud-build-local` for running builds locally. |
| 2017-07-18 | Gradle build step support |  | Gradle was added as a supported Cloud Build build step. |
| 2017-07-10 | Home volume mounting across build steps |  | A shared home volume is mounted as the $HOME directory across Cloud Build steps. |
| 2017-06-15 | Kubectl build step support |  | Kubectl was added as a supported Cloud Build build step. |
| 2017-06-07 | Builder service account IAM permission controls |  | Builder service account permissions were expanded to support end-user and IAM-based control when invoking permissioned APIs during builds. |
| 2017-03-06 | Cloud Build Console user interface |  | The Cloud Build user interface became generally available in Google Cloud Platform Console, including build history. |
| 2017-03-06 | Cloud Build triggers |  | Cloud Build triggers were released in beta. |
| 2016-12-15 | Cloud Build API |  | The Cloud Build API reached general availability. |
| 2016-12-15 | Cloud Build supported build steps |  | Support for official build steps in Cloud Build was generally released. |
| 2016-11-23 | Cloud SDK CLI support in Cloud Build |  | Cloud SDK CLI integration for Cloud Build reached general availability; Cloud SDK CLI integration for Cloud Build was released in beta. |
| 2016-01-14 | Cloud Build service |  | Cloud Build was released in beta. |

Source file slug: `cloud-build.md`

