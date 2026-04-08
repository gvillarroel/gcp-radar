# Migration Center

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 115
Unique features: 105

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-30 | AWS asset discovery |  | Migration Center can discover additional asset types from an AWS account. |
| 2026-02-26 | Network dependency visualization |  | Migration Center can visualize network dependencies and filter the graph by tags, groups, network, and asset details; Migration Center can visualize network dependencies between discovered server assets. |
| 2026-02-02 | Compute Engine migration preferences |  | Migration Center lets you choose multi-tenant or sole-tenant preference modes when configuring Compute Engine migration preferences. |
| 2026-02-02 | Sizing and network preferences |  | Migration Center lets you customize sizing recommendations with target sizing strategy, default utilization estimates, and network data transfer preferences. |
| 2026-01-07 | Remote WMI Windows guest host collection |  | Migration Center discovery client CLI uses remote WMI collections by default for Windows guest host collection instead of local scripts. |
| 2025-11-17 | Hyperdisk Storage Pools preference |  | Migration Center lets you prefer Hyperdisk Storage Pools in Compute Engine migration preferences. |
| 2025-10-16 | AI-powered insights for allocated Google Cloud assets |  | Migration Center shows AI-powered insights for each allocated Google Cloud asset. |
| 2025-10-16 | TCO details in Cloud Console |  | Migration Center shows detailed total cost of ownership (TCO) information in Google Cloud Console for each asset and migration preference set without exporting the report. |
| 2025-10-15 | Aggregated software assets view on the Summary page |  | The Migration Center Summary page shows an aggregated view of detected software assets. |
| 2025-10-15 | Software asset grouping in TCO reports |  | Migration Center can group software assets and show a count of each software instance in the TCO report. |
| 2025-10-06 | AWS asset discovery support |  | Migration Center Preview supports discovery of Amazon CloudFront, ECS, EFS, EKS, Redshift, S3, VPC, Lambda, and ELB assets from AWS accounts. |
| 2025-10-06 | CPU manufacturer information for discovered assets |  | Migration Center collects and displays CPU manufacturer information for discovered assets. |
| 2025-10-06 | VMware vCenter collection progress indicator |  | Migration Center Discovery Client shows a progress bar and asset count for VMware vCenter collections. |
| 2025-09-18 | Granular Google Compute Engine preferences |  | Migration Center lets you refine Google Compute Engine recommendations by balancing latest technology and cost, prioritizing the lowest price, including pre-released SKUs, and choosing from more pricing tracks. |
| 2025-09-10 | AI-powered software detection suggestions |  | Migration Center includes AI-powered suggestions for software detection. |
| 2025-08-14 | Custom report templates |  | Migration Center can create a custom report from a document template that matches the template's outline and style. |
| 2025-08-14 | File selection regex flags |  | Migration Center adds the --force-include and --force-exclude flags to control file selection. |
| 2025-08-14 | HTML report feedback and support links |  | Migration Center HTML reports include feedback and support links to Google Forms. |
| 2025-08-14 | Quantitative metrics in report summary |  | Migration Center report summaries include key quantitative metrics for a quick overview. |
| 2025-08-11 | Amazon RDS discovery support |  | Migration Center supports discovery of Amazon RDS instances and uploading the collected information to Migration Center. |
| 2025-08-11 | Azure virtual machine discovery |  | Supports discovery of Azure virtual machine instances and upload of the collected information to Migration Center; Supports discovery of Azure virtual machine instances and upload of the collected information to Migration Center. |
| 2025-08-06 | Amazon RDS asset tag filtering |  | Allows filtering discovered Amazon Relational Database Service assets by tags. |
| 2025-08-06 | AWS EC2 memory utilization collection |  | Collects Amazon EC2 memory utilization during AWS inventory discovery when the CloudWatch agent is installed and configured. |
| 2025-08-06 | Discovery client data export |  | Exports collected discovery client data to a file for manual import into Migration Center. |
| 2025-08-06 | Linux guest scan Btrfs filesystem discovery |  | Discovers the Btrfs filesystem during Linux guest scans with the mcdc CLI. |
| 2025-07-14 | Discovery client connection error descriptions |  | Shows short descriptions for discovery client connection errors on the Migration Center Data Import page. |
| 2025-07-14 | Network dependencies report |  | Generates a network dependencies report from collected infrastructure data; Migration Center can generate a report of network dependencies from collected infrastructure data. |
| 2025-07-03 | Migration Center discovery client v5 | 2025-06-30 | The Migration Center discovery client v5 was shut down and is no longer available; Migration Center discovery client v5 is being retired, with end of sale on July 30, 2024 and end of life on June 30, 2025; deprecated on 2025-06-30. |
| 2025-07-03 | Rapid Migration Assessment API | 2025-06-30 | The Rapid Migration Assessment API was shut down and is no longer available; The Rapid Migration Assessment API is being retired, with end of sale on July 30, 2024 and end of life on June 30, 2025; deprecated on 2025-06-30. |
| 2025-04-24 | Bulk asset group management |  | Lets you create asset groups in bulk or update group assignments across many assets simultaneously. |
| 2025-03-24 | Amazon RDS discovery |  | Migration Center can discover Amazon RDS instances and upload the collected information. |
| 2025-03-24 | AWS tag collection and upload |  | Collects and uploads AWS tags to Migration Center for better visibility and grouping. |
| 2025-03-24 | Disk IOPS upload |  | Migration Center can upload disk read and write IOPS data to improve pricing and sizing reports. |
| 2025-03-24 | mcdc discover ls --extended flag |  | Adds the --extended flag to the mcdc discover ls command to show location and collection parameter columns. |
| 2025-01-29 | AWS EC2 discovery |  | Migration Center can discover AWS EC2 instances and upload the collected information. |
| 2025-01-29 | Connected Google Cloud project details |  | Migration Center now shows information about the connected Google Cloud project on the settings page. |
| 2025-01-29 | Discovery client unregistration |  | Migration Center lets you unregister a discovery client so it can be registered in another project without reinstalling. |
| 2025-01-29 | Service account key renewal |  | Migration Center lets you manually renew the service account key used for authentication. |
| 2025-01-09 | MongoDB workload identification in Use Case Navigator |  | Migration Center's Use Case Navigator can identify MongoDB workloads and provide transformation guidance and footprint reports. |
| 2024-11-11 | Discovery client disk usage collection |  | Migration Center's discovery client now collects more accurate disk usage data for Linux and Windows VMs and supports disk partition type discovery. |
| 2024-11-11 | ESX CPU hyperthreading detection |  | Migration Center can detect ESX CPU hyperthreading when collecting inventory-level data from vCenter. |
| 2024-10-31 | Cloud SQL Enterprise Plus for SQL Server |  | Migration Center now supports Cloud SQL Enterprise Plus for SQL Server. |
| 2024-10-31 | Google Cloud engineer migration assistance authorization |  | Migration Center lets you authorize Google Cloud engineers to help with your migration by accepting the terms and conditions. |
| 2024-10-31 | VM hyperthreading state visibility |  | Migration Center surfaces whether a VM has hyperthreading enabled or disabled based on discovery client data. |
| 2024-09-30 | Inventory and performance data export |  | Migration Center lets you export inventory and performance data in CSV and Google Sheets formats. |
| 2024-09-30 | Server-to-hosted-database relationship view |  | Migration Center shows the relationship between a server and a hosted database directly in the Console. |
| 2024-09-30 | StratoZone | 2024-09-30 | StratoZone was the legacy migration service that ended on September 30, 2024; StratoZone is being retired, with end of sale on July 30, 2024 and end of life on October 1, 2024; deprecated on 2024-09-30. |
| 2024-09-16 | BitLocker encryption technical fit assessment |  | Migration Center adds a technical fit assessment for BitLocker encryption in Shift to GCE and Shift to GDC assessments. |
| 2024-09-16 | Discovery client update notifications |  | Migration Center notifies users when a new discovery client version is available. |
| 2024-08-11 | Guest OS credential reset in vCenter discovery |  | Users can reset guest OS credentials from the vCenter discovery page. |
| 2024-08-11 | Guest OS credential validation for IP range creation |  | The discovery client validates that guest OS credentials exist before creating an IP range. |
| 2024-08-11 | Linux kernel driver information collection |  | Migration Center supports collecting Linux kernel driver information for enhanced technical assessment. |
| 2024-08-11 | Migration Center discovery client 6.3.2 |  | Migration Center discovery client version 6.3.2 is available with new features and bug fixes. |
| 2024-08-11 | Scans page upload status error tooltip |  | The Scans page shows an error tooltip for upload status. |
| 2024-08-11 | vCenter discovery guest OS credentials |  | You can add new guest OS credentials from the vCenter discovery page. |
| 2024-08-11 | VirtIO drivers technical fit assessment |  | Migration Center adds a technical fit assessment for VirtIO drivers in Shift to GCE and Shift to GDC assessments. |
| 2024-07-31 | License cost reduction calculations for disabling simultaneous multithreading |  | Migration Center can calculate license cost reductions by disabling simultaneous multithreading for Windows Server and Microsoft SQL Server virtual machines. |
| 2024-07-31 | VE2 node recommendations for Google Cloud VMware Engine |  | Migration Center provides recommendations for VE2 nodes on Google Cloud VMware Engine. |
| 2024-07-24 | Machine CPU count in detailed offline HTML reports |  | Detailed offline HTML reports in the discovery client include information on each machine's CPU count per virtual machine. |
| 2024-07-24 | Migration Center discovery client 6.3.1 |  | Migration Center discovery client version 6.3.1 is available with new features and bug fixes. |
| 2024-07-24 | Migration Center discovery client automated upgrades |  | Migration Center discovery client supports automated upgrades from previous versions, starting with version 6.3.0. |
| 2024-06-30 | Database discovery and assessment |  | Migration Center can discover and assess Microsoft SQL Server, MySQL, and PostgreSQL databases; Migration Center can discover and assess Microsoft SQL Server, MySQL, and PostgreSQL databases. |
| 2024-06-30 | Microsoft licenses report |  | Migration Center can generate a report for Microsoft licenses, including Windows Server and SQL Server. |
| 2024-06-30 | Server-to-hosted-database relationship mapping |  | Migration Center automatically maps the relationship between a server and a hosted database when both are scanned. |
| 2024-06-24 | Analytics and Cloud Logging opt-out controls |  | The installation flow lets users opt out of sending analytics and Cloud Logging data to Google. |
| 2024-06-24 | Discovery client log viewing |  | Migration Center Console can display discovery client logs for troubleshooting communication issues. |
| 2024-06-24 | Local fit assessment report generation |  | Migration Center can generate detailed fit assessment reports locally, including offline use for air-gapped environments. |
| 2024-06-24 | Network statistics collection |  | The discovery client collects network statistics such as open ports and traffic usage to support network dependency analysis. |
| 2024-06-24 | Periodic data collection scheduling |  | Migration Center lets users schedule periodic data collection and define per-server opt-out windows. |
| 2024-06-04 | Cloud SQL shape recommendation details |  | The detailed pricing report can include an explanation of Cloud SQL shape recommendation calculations. |
| 2024-06-04 | Detailed pricing report CSV export |  | Migration Center can download detailed pricing reports as CSV files for servers and databases. |
| 2024-05-20 | Google Distributed Cloud air-gapped migration assessment |  | The mcdc CLI can assess VMware vSphere virtual machines for migration to Google Distributed Cloud air-gapped. |
| 2024-04-19 | Installed software detection |  | Migration Center can show asset-level insights for software detected on scanned virtual machines, including third-party frameworks. |
| 2024-03-12 | Asset groups |  | Migration Center groups can include both servers and databases; Migration Center lets users create groups of assets that share common characteristics such as functional dependencies or location. |
| 2024-03-12 | Cloud SQL migration assessment |  | Migration Center can assess database migration journeys to Cloud SQL and provide a technical fit assessment for the target. |
| 2024-03-12 | Database TCO preferences |  | Migration Center lets you include databases in the total cost of ownership report through expanded database preferences. |
| 2024-02-08 | Pricing report explainability |  | Migration Center adds explainability details to the detailed pricing report, including rightsizing and resource allocation details for supported targets. |
| 2024-02-08 | Storage-only node recommendations |  | Migration Center can recommend storage-only nodes on Google Cloud VMware Engine. |
| 2024-02-08 | VPC Service Controls integration |  | Migration Center resources can be secured with a VPC Service Controls service perimeter. |
| 2024-01-08 | Exadata cost estimation |  | Migration Center can estimate the cost of running an Exadata platform as a fully managed service in BigQuery. |
| 2023-12-07 | VMware cost estimation |  | Migration Center can estimate the cost of running a VMware platform as a fully managed service in Google Cloud. |
| 2023-11-30 | Performance data report export |  | Migration Center can create and export a performance data report for assets to explain recommendations. |
| 2023-11-15 | Out-of-scope assets |  | Migration Center lets you mark assets as out of scope so they are hidden from groups and excluded from TCO reports. |
| 2023-10-31 | Debug bundle export |  | The Migration Center discovery client can export a debug bundle for troubleshooting. |
| 2023-10-31 | mcdc CLI on Windows |  | The Migration Center discovery client CLI can run on Windows while retaining inventory discovery, guest discovery, and IP range scan support. |
| 2023-10-31 | WMI guest collection |  | The Windows version of the Migration Center discovery client CLI can collect guests from Windows target machines using WMI. |
| 2023-09-21 | Local service account key authorization |  | The Discovery client can use a local service account key during authorization. |
| 2023-09-21 | MongoDB database scanning |  | The Migration Center discovery client can scan MongoDB databases. |
| 2023-09-21 | Project name filtering during authorization |  | The Discovery client can filter project names during authorization in Migration Center. |
| 2023-09-12 | Custom rightsizing values for assessment preferences |  | Migration Center lets you specify custom rightsizing values in assessment preferences. |
| 2023-08-15 | Asset export to Migration Center |  | The mcdc CLI can export discovered assets to Migration Center for insight generation and TCO reporting. |
| 2023-08-15 | IP range scan discovery |  | The mcdc CLI can scan IP address ranges to detect assets in an infrastructure. |
| 2023-08-15 | Migration Center discovery client CLI |  | The Migration Center discovery client CLI became generally available in version 2.0.0 with integration into Migration Center. |
| 2023-08-15 | VM performance data collection via vCenter API |  | The mcdc CLI can collect VM performance data through the vCenter API. |
| 2023-06-26 | Asset export to Google Sheets |  | Migration Center can export assets to a Google Sheets file in Google Drive. |
| 2023-06-26 | TCO reports for additional target environments |  | Migration Center can create TCO reports for Google Cloud VMware Engine and sole-tenant nodes on Compute Engine as target environments. |
| 2023-05-31 | Discovery client telemetry collection |  | The Discovery client can collect usage and other anonymized data to help improve the product. |
| 2023-05-15 | Data warehousing cost calculator |  | Migration Center's cost estimation functionality includes a generally available data warehousing cost calculator for BigQuery serverless data warehouse estimates. |
| 2023-04-07 | Cloud Logging output for Discovery client |  | The Discovery client can send technical logs and error messages to Cloud Logging. |
| 2023-03-30 | Automated AWS and Azure discovery scripts |  | Migration Center supports automated scripts that collect data from AWS and Azure infrastructure and generate tables for upload. |
| 2023-03-30 | Infrastructure data table uploads |  | Migration Center lets users upload infrastructure data tables created from available templates, with file uploads up to 100 MB. |
| 2023-03-30 | Migration preferences |  | Migration Center lets users define multiple migration preferences to customize migration assessments. |
| 2023-03-30 | TCO summary reports |  | Migration Center provides total cost of ownership summary reports for assets targeted to migrate to Google Compute Engine. |
| 2023-03-07 | SAP cost calculator |  | Migration Center includes the SAP cost calculator in its cost estimation functionality. |
| 2023-02-16 | Offline discovery mode |  | Discovery Client 5.3.5.4 adds offline discovery mode in Preview. |

Source file slug: `migration-center.md`

