# Migrate to Containers

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 97
Unique features: 101

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2024-01-03 | Migrate to Containers Console UI | 2024-01-03 | The Google Cloud console UI for Migrate to Containers is deprecated; deprecated on 2024-01-03. |
| 2024-01-03 | Migrate to Containers processing-cluster CRDs | 2024-01-03 | Custom resource definitions that use processing clusters for Migrate to Containers are deprecated; deprecated on 2024-01-03. |
| 2023-11-29 | WebSphere Traditional plugin | 2023-11-29 | The WebSphere Traditional plugin for workload modernization is deprecated; deprecated on 2023-11-29. |
| 2023-05-22 | Anthos on AWS in-place processing | 2023-05-22 | In-place processing on Anthos on AWS clusters is no longer supported; deprecated on 2023-05-22. |
| 2023-05-22 | Anthos on VMware in-place processing | 2023-05-22 | In-place processing on Anthos on VMware clusters is no longer supported; deprecated on 2023-05-22. |
| 2023-05-22 | Legacy Linux runtime | 2023-05-22 | The legacy Linux runtime used for generated migration plans is deprecated; deprecated on 2023-05-22. |
| 2023-03-28 | Automatic secret creation from security realms and keystores |  | Secrets are automatically created from extracted security realms configuration and keystores. |
| 2023-03-28 | ExcludeFiles migration plan property |  | The ExcludeFiles property lets users exclude specific files and directories from the container image. |
| 2023-03-28 | JBoss data migration to PVC |  | The data migration feature automatically creates and mounts a Persistent Volume Claim for the JBOSS_HOME/standalone/data directory. |
| 2023-03-28 | JBoss EAP and WildFly migration support |  | Migrate to Containers supports migration of JBoss EAP 7.0-7.4 and WildFly 8.1.0-26.1.1 to equivalent WildFly-based container images. |
| 2023-03-28 | targetImageHome migration plan property |  | The targetImageHome property lets users specify an alternative container image with a different JBOSS_HOME location. |
| 2023-03-28 | WordPress server refactoring to containers |  | WordPress servers running on Apache 2 Linux can be refactored into containers deployed on GKE, GKE Autopilot, Anthos, and Cloud Run. |
| 2023-03-20 | Anthos for VMware processing clusters | 2023-03-20 | Processing clusters on Anthos for VMware used for containerizing VMware sources are deprecated; deprecated on 2023-03-20. |
| 2023-03-20 | Workforce Identity Federation |  | Migrate to Containers supports Workforce Identity Federation. |
| 2022-12-06 | Apache 2 Linux application refactoring to containers |  | Apache 2 Linux-based applications can be refactored into containers deployed on GKE, GKE Autopilot, Anthos, and Cloud Run. |
| 2022-12-06 | AWS source containerization | 2022-12-06 | Containerization from AWS sources is deprecated; deprecated on 2022-12-06. |
| 2022-12-06 | Azure source containerization | 2022-12-06 | Containerization from Azure sources is deprecated; deprecated on 2022-12-06. |
| 2022-12-06 | JBoss and WildFly application refactoring to containers |  | Applications running on JBoss Enterprise Application Platform or WildFly can be refactored into containers deployable on GKE, GKE Autopilot, Anthos clusters, and Cloud Run. |
| 2022-12-06 | Local processing in AWS clusters | 2022-12-06 | Local processing in AWS clusters is deprecated; deprecated on 2022-12-06. |
| 2022-12-06 | local vSphere source containerization | 2022-12-06 | Containerization from local vSphere sources is deprecated; deprecated on 2022-12-06. |
| 2022-12-06 | Migctl logging verbosity control |  | The migctl logging set-verbosity command lets users control backend log output between info-only and debug levels. |
| 2022-09-20 | COM object registration for Windows IIS migrations |  | Windows DLLs containing COM objects are copied to the target image and registered automatically. |
| 2022-09-20 | Kubernetes health probe generation for Windows IIS migrations |  | Windows IIS migrations can generate Kubernetes readiness and liveness probes by default. |
| 2022-09-20 | KubeVirt UEFI migration support |  | VMs using UEFI firmware can be migrated without user interaction. |
| 2022-09-20 | Migration progress indicators in migctl |  | The migctl migration status command now shows progress for snapshot creation, artifact generation upload, and Linux image packing. |
| 2022-09-20 | Migration source health checks |  | The service periodically checks migration source status to detect availability and health problems such as missing service accounts or insufficient permissions. |
| 2022-09-20 | Tomcat application refactoring to containers |  | Tomcat applications can be refactored into containers and deployed on GKE, GKE Autopilot, Anthos clusters, and Cloud Run. |
| 2022-09-20 | Windows services support for Windows IIS migrations |  | Windows IIS migrations can include specified Windows services as part of the migrated application. |
| 2022-07-13 | Anthos for VMs modernization |  | Traditional VMs can be modernized to run on Anthos for VMs. |
| 2022-07-13 | Local OVF source support |  | Local OVF files can be imported to create Anthos VM Runtime migrations. |
| 2022-07-13 | VM inventory listing for connected sources |  | Connected GCE, local VMware, and Migrate for Compute Engine v5 sources expose a VM inventory list for migration planning; Connected local VMware, GCE, and Migrate for Compute Engine v5 sources expose VM inventory through Cloud Console and migctl. |
| 2022-06-21 | Linux Service Manager health probes |  | Linux Service Manager deployments use Kubernetes readiness and liveness probes by default, with selectable services for probing. |
| 2022-06-21 | Microsoft Visual C++ runtime support |  | The Windows IIS migration flow can discover installed Microsoft Visual C++ runtime libraries and install them in the migrated container. |
| 2022-06-21 | Migration fit assessment tool |  | Migrate to Containers includes a fit assessment tool that evaluates whether a VM workload is suitable for container migration. |
| 2022-06-21 | PATH environment variable extraction |  | The Windows IIS migration flow can discover additional PATH entries on the source VM and add them to the migrated container. |
| 2022-06-21 | Tomcat health probes |  | Tomcat deployments use Kubernetes readiness and liveness probes by default, with options to disable or modify them in the migration plan. |
| 2022-05-17 | Artifact repository health checks |  | Migctl checks artifact repository health and warns when the service account cannot upload artifacts to the target bucket. |
| 2022-05-17 | Migration API v1beta2 | 2022-05-17 | The v1beta2 Migration API is deprecated after the v1 API graduation and remains supported until May 2023; deprecated on 2022-05-17. |
| 2022-05-17 | Sensitive data upload for Tomcat migrations |  | The Tomcat migration plan can include certificates in the repository when the includeSensitiveData parameter is set to true. |
| 2022-05-17 | Skaffold build and deploy support for Windows containers |  | Generated Skaffold YAML files help accelerate image build and deployment for Windows migration artifacts on GKE and Anthos clusters. |
| 2022-05-17 | Tomcat artifact packaging |  | Tomcat migration artifacts are renamed to tomcatServer.tar.gz and exclude the bin and lib directories. |
| 2022-05-17 | Tomcat server version override |  | Users can manually provide the Tomcat server version in the migration plan when automatic discovery does not find it. |
| 2022-03-28 | Anthos Bare Metal processing clusters |  | Anthos clusters on Bare Metal can be used as processing clusters to run container migrations on-premises. |
| 2022-03-28 | IIS site splitting |  | Automatically breaks a discovered IIS VM into one container per site during migration planning. |
| 2022-03-28 | Migrate for Compute Engine v5 integration |  | Migrate for GKE and Anthos can use the Migrate for Compute Engine v5.x managed service for migrations from VMware, AWS EC2, and Azure VM environments. |
| 2022-03-28 | Skaffold build and deploy support for containers |  | Generated Skaffold YAML files help accelerate container image builds and deployments to GKE and Anthos clusters for multiple migration flows. |
| 2022-03-28 | Tomcat server installation directory override |  | The Tomcat application replatforming flow lets users manually specify the Tomcat server installation directory before migration. |
| 2022-03-28 | WebSphere application replatforming |  | WebSphere-based VMs can be replatformed into containers using tWAS or Open Liberty images, with discovery, app splitting, and deployment artifact generation support. |
| 2022-01-08 | Container image size alerts |  | Adds migration-plan alerts when files may be too large for a successful system container image. |
| 2022-01-08 | Windows connection strings |  | Supports connection strings at both site and global scopes for Windows migrations. |
| 2021-12-08 | Automatic version checks |  | Checks for a newer available version by probing a Google Cloud Storage version-check resource. |
| 2021-12-08 | AWS EC2 fit assessment |  | Enables fit assessments for AWS EC2 workloads using collection scripts run on the instance or over SSH. |
| 2021-12-08 | Cloud Run fit assessment |  | Enables fit assessments for workloads targeted for automated containerization to Cloud Run. |
| 2021-12-08 | Compute Engine lift-and-shift fit assessment |  | Adds fit assessment support for lift-and-shift migrations to Google Compute Engine. |
| 2021-12-08 | Compute Engine VM fit assessment |  | The fit assessment tool can assess Google Compute Engine VM workloads by running collection scripts locally or over remote SSH. |
| 2021-12-08 | Fit assessment report source platform metadata |  | Adds source platform and platform-specific VM path information to fit assessment reports. |
| 2021-12-08 | GKE Autopilot and Cloud Run migration support |  | Makes the simplified Linux service manager the default for migrations to GKE Autopilot clusters and Cloud Run. |
| 2021-12-08 | GKE Autopilot fit assessment |  | Enables fit assessments for workloads targeted for automated containerization to GKE Autopilot. |
| 2021-12-08 | RVTools data source for fit assessment |  | The fit assessment tool can analyze a single VMware vCenter RVTools .xlsx export as an input source. |
| 2021-12-08 | Tomcat application replatforming |  | Supports discovering Tomcat applications on VMs and replatforming them into containers using Apache Tomcat community images. |
| 2021-12-08 | Tomcat workload fit assessment |  | Enables fit assessments for Linux workloads running Tomcat application servers. |
| 2021-10-05 | Enhanced runtime |  | Enhanced runtime lets you deploy containers to GKE Autopilot and Cloud Run using a non-privileged lightweight system init based on LXC; Enhanced runtime adds preview support for deploying containers to GKE Autopilot and Cloud Run with updated service manager, environment, and logging settings. |
| 2021-10-05 | Fit assessment tool |  | The migration fit assessment tool helps evaluate workload suitability for containerization and produces HTML and JSON reports with fit scores and technical insights; The preview fit assessment tool adds Windows VM collection, remote VMware Tools collection, and SSH-based collection. |
| 2021-08-17 | Cloud Logging configuration via logs.yaml |  | Migration artifacts generation now creates a logs.yaml file that lists detected log files and can be edited to configure Cloud Logging output. |
| 2021-08-17 | Windows workload connection strings |  | Migration of a Windows workload can specify connection strings for a .NET Framework data provider. |
| 2021-05-19 | Linux discovery tool multiple NIC detection |  | The Linux discovery tool now warns when multiple NICs are detected because they can increase migration effort. |
| 2021-05-19 | Migration plan discovery for service endpoints and NFS mounts |  | Generated migration plans now include discovered service endpoints and NFS mounts that can be edited before migration. |
| 2021-04-06 | Linux discovery tool |  | The Linux discovery tool now outputs HTML and JSON reports, uses a fit assessment instead of a 0-10 fit score, and includes more source VM details; The Linux discovery tool helps assess Linux VM workloads for migration to containers. |
| 2021-04-06 | Migration plan service disabling |  | Migration plans can automatically disable unneeded VM services and optionally disable additional services on the migrated container. |
| 2021-01-25 | Anthos clusters on AWS processing clusters |  | Anthos clusters on AWS can be used as processing clusters for migrating AWS workloads. |
| 2021-01-25 | Data repository support |  | Migrate for Anthos supports additional data repositories, including Amazon ECR, Amazon S3, and Docker registries with basic authentication. |
| 2021-01-25 | HTTPS proxy support |  | Migrate for Anthos can use an HTTPS proxy for outbound internet access. |
| 2021-01-25 | Windows migration deployment_spec.yaml |  | Migrate for Anthos includes deployment_spec.yaml in artifacts.zip for Windows migrations so migrated Windows workloads can be deployed to a target cluster. |
| 2020-10-08 | Container image tag customization |  | GenerateArtifactsFlow now uses timestamp-based container image tags and lets you set a custom tag value. |
| 2020-10-08 | Custom Services Blocklist |  | Lets you define a list of services to disable in a migrated container. |
| 2020-10-08 | Group Managed Service Account support |  | Migrated Windows containers can run under a specific service account identity by using a Group Managed Service Account. |
| 2020-10-08 | Windows discovery tool |  | The Windows discovery tool helps assess Windows VM workloads for migration to containers. |
| 2020-10-08 | Windows VM workload migration |  | Windows VM workload migration is generally available in the Google Cloud Console, including creation of a Windows migration source. |
| 2020-07-28 | Anthos GKE on-prem migration support |  | Supports migrating source VM workloads from vCenter/vSphere to an Anthos GKE on-prem cluster running in the same environment. |
| 2020-07-28 | Cloud processing cluster service account configuration |  | Uses a service account instead of the cloud-platform scope when creating a processing cluster for Linux workload migrations. |
| 2020-07-28 | Compute Engine migration zone option | 2020-07-28 | The --zone option for creating a Compute Engine migration was removed; deprecated on 2020-07-28. |
| 2020-07-28 | Compute Engine service account JSON key option |  | Adds a JSON key option for specifying a service account when creating a Compute Engine migration source. |
| 2020-07-28 | Custom Resource Definitions (CRDs) |  | Provides an API for creating and managing migrations programmatically. |
| 2020-07-28 | Google Cloud Console support |  | Enables workload migration management through Google Cloud Console; Enables installing Migrate for Anthos on a processing cluster and creating a Compute Engine migration source from Google Cloud Console. |
| 2020-07-28 | migctl install node selector and toleration options |  | The migctl setup install command can target specific nodes or node pools using node selectors and tolerations. |
| 2020-07-28 | migctl migration cleanup command | 2020-07-28 | The migration cleanup command was removed and is no longer necessary; deprecated on 2020-07-28. |
| 2020-07-28 | migctl migration logs command | 2020-07-28 | The command for viewing migration logs was removed in favor of Google Cloud Console; deprecated on 2020-07-28. |
| 2020-07-28 | Migration plan editing workflow |  | Requires downloading and reuploading the migration plan when making edits. |
| 2020-07-28 | Namespace selection | 2020-07-28 | The option to choose the installation and migration namespace was removed; deprecated on 2020-07-28. |
| 2020-07-28 | Windows VM migration to GKE containers |  | Migrate for Anthos can migrate Windows VMs to workloads on GKE by cloning VM disks and generating deployment artifacts. |
| 2020-03-30 | Anthos on-prem migration processing |  | Preview support lets migrations be processed in Anthos on-prem environments. |
| 2020-03-30 | automated migration plan and deployment artifact generation |  | The service can generate a suggested migration plan and auto-create CI/CD and deployment artifacts, including YAML specs for containers, volumes, and workloads. |
| 2020-03-30 | Java container resource compatibility layer |  | The runtime layer reflects correct resource allocations in /proc for older Java applications that are not container aware. |
| 2020-03-30 | Kubernetes CRD-based migrations |  | Migrations are defined and operated using a Kubernetes custom resource definition. |
| 2020-03-30 | migctl CLI | 2024-01-03 | The migctl command-line interface for Migrate to Containers is deprecated; The new migctl CLI supports deploying Migrate for Anthos and managing migrations through a structured workflow; deprecated on 2024-01-03. |
| 2020-03-30 | Migrate for Anthos v1.0 Marketplace deployment | 2020-03-30 | The v1.0 Marketplace deployment was removed, and v1.3 can be installed in v1.0 compatibility mode where needed; deprecated on 2020-03-30. |
| 2020-03-30 | unified VM source migration workflow |  | The product introduced a unified migration workflow across VMware, AWS EC2, Azure VMs, and Compute Engine VMs. |
| 2020-03-30 | Windows IIS ASP.NET migration to Windows 2019 containers on GKE |  | Preview support adds migration of Windows VMs running IIS ASP.NET web applications to Windows 2019 containers on GKE. |
| 2019-11-13 | application log export to Stackdriver Logging |  | A ConfigMap can route selected application log file content to Stackdriver Logging. |
| 2019-11-13 | Exporting streaming persistent volumes to permanent storage |  | This feature lets you monitor the export of short-term storage to a persistent volume using kubectl. |
| 2019-11-13 | VM migration to GKE containers |  | The product supports migrating VMware, Amazon EC2, Azure, and Compute Engine VMs to containers on Google Kubernetes Engine. |

Source file slug: `migrate-to-containers.md`

