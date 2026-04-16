---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.814Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Windows services support for Windows IIS migrations"
feature_slug: "windows-services-support-for-windows-iis-migrations"
latest_feature_date: "2022-09-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-windows"
keywords:
  - "windows"
  - "iis"
  - "migrations"
  - "can"
  - "include"
  - "specified"
  - "part"
  - "migrated"
---

# Windows services support for Windows IIS migrations

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Windows IIS migrations can include specified Windows services as part of the migrated application.

## Extended Definition

Windows IIS migrations can include specified Windows services as part of the migrated application.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-windows](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-windows)

## Supporting Pages

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The next sections discuss this structure, explain what each part is, and how to modify it. globalSettings : globalIis : enablegmsa : string apppools : - enable32bitapponwin64 : bool identitytype : string managedruntimeversion : string name : string connectionStrings : add : - connectionstring : string name : string providername : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string image : extraFeatures : - string target : baseVersion : string requirements : - string warnings : - string msvcRuntimes : - string pathEnvVarAdditionalEntries : - string images : - name : string probes : enabled : bool livenessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] readinessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] useractions : files : - source : string target : string registry : currentcontrolset : - path : string software : - path : string workloads : sites : site : - applications : - applicationpool : string path : string virtualdirectories : - path : string physicalpath : string bindings : - port : int protocol : string sslflags : int connectionstrings : - connectionstring : string name : string providername : string name : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string serverautostart : bool version : string The globalSettings section The globalSettings section describes basic requirements for pods running IIS sites from this VM.
- To run additional services in the migrated container, add entries to the windowsServices section, and copy the necessary binaries in the useractions section . version: v1 globalSettings: target: … globalIIS: … images: - name: migrated-image-zgwb2 workloads: sites: site: - applications: ... bindings: - port: 80 protocol: http name: Default Web Site … windowsServices: - MyService useractions: files: - source: C:\Program Files\MyService target: C:\Program Files\MyService registry: currentcontrolset: - key: services\MyService The useractions section The useractions section specifies additional files and registry keys that you might want to migrate.
- You can modify the list of runtimes in the migration plan by adding or removing members of msvcRuntimes : The complete list of possible values are: (The 2015 runtime also includes support for 2017, 2019, and 2022) msvcRuntimes : - MSVC2012 x64 - MSVC2013 x64 - MSVC2015 x64 - MSVC2012 x86 - MSVC2013 x86 - MSVC2015 x86 The pathEnvVarAdditionalEntries section Windows IIS applications might have non-default PATH environment variable entries, which are automatically detected on the source VM and included in the migration plan.
- The probes are disabled by default, to enable the probes, set the enabled flag to true . images : name : IMAGE NAME probes : enabled : false livenessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null readinessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null The windowsServices section Windows containers created during a migration run and monitor a single Windows IIS service.

### Planning best practices \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Not a good fit Linux For Linux, applications and servers that are not a good fit for migration with Migrate to Containers include: High performance and large in-memory databases VMs with special kernel drivers (for example, kernel-mode NFS) Dependencies on specific hardware Software with licenses tied to certain hardware ID registration Windows For Windows, workloads without IIS 7 or higher installed are not a fit for migration.
- Other types of applications not fit for migration include: Applications with dependencies on GPUs or TPUs Low level networking applications Desktop, RDP, and VDI applications Applications with BYOL DNS and network access rules Before migrating to GKE, be sure you understand the network resources, and services used by your migrated workloads, and ensure that they are accessible and addressable from your Virtual Private Cloud.
- Windows Windows applications that are a good fit for migration using Migrate to Containers include workloads that meet all following characteristics: IIS 7 or later, ASP.NET with .NET Framework 3.5 or later Web and logic tiers WS2008 R2 or higher Operating system support Migrate to Containers is compatible with these VM operating systems .
- Good fit Linux Linux applications that are a good fit for migration using Migrate to Containers include the following application architectures: Web/Application Servers Business logic Middleware (for example, Tomcat) Multi-VM, multi-tier stacks (for example, LAMP) Small/Medium sized Databases (for example, MySQL and PostgreSQL) In addition, applications best suited for migration with Migrate to Containers have the following operational characteristics: Low duty-cycle & bursty workloads Development, testing and training lab environments Always-on, low load services In general, most Linux workloads are compatible with migration, except for those workloads explicitly listed below under Not a good fit .

### Migrate to Containers CLI reference for Windows \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-windows](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-windows)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate to Containers CLI reference for Windows m2c is a command-line tool that lets you set up and execute migrations on your local machine. m2c A command-line interface to Migrate to Containers.
- Synopsis m2c COMMAND [options] Flags -q,--quiet Don't output anything -v,--verbose Show verbose output Commands Command Description m2c analyze Analyze the workload's configuration in the given file system. m2c completion Generate the autocompletion script for the specified shell m2c config View and edit configuration properties m2c generate Generate migration artifacts from the given file system. m2c help Help about any command m2c version Print the CLI version. m2c analyze Analyze the workload's configuration in the given file system with a given plugin.
- Can be specified multiple times -p,--plugin name Plugin name -s,--source path The path to a VHD image files --volume localPath:remotePath Bind mounts a file or directory into the container in the format of "localPath:remotePath".
- Can be specified multiple times m2c completion Generate the autocompletion script for m2c for the specified shell.

