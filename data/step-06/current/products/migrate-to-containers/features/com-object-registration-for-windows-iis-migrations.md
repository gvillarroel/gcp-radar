---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.806Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "COM object registration for Windows IIS migrations"
feature_slug: "com-object-registration-for-windows-iis-migrations"
latest_feature_date: "2022-09-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices"
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart"
keywords:
  - "com"
  - "object"
  - "registration"
  - "windows"
  - "iis"
  - "migrations"
  - "dlls"
  - "containing"
---

# COM object registration for Windows IIS migrations

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Windows DLLs containing COM objects are copied to the target image and registered automatically.

## Extended Definition

Windows DLLs containing COM objects are copied to the target image and registered automatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)

## Supporting Pages

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- The next sections discuss this structure, explain what each part is, and how to modify it. globalSettings : globalIis : enablegmsa : string apppools : - enable32bitapponwin64 : bool identitytype : string managedruntimeversion : string name : string connectionStrings : add : - connectionstring : string name : string providername : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string image : extraFeatures : - string target : baseVersion : string requirements : - string warnings : - string msvcRuntimes : - string pathEnvVarAdditionalEntries : - string images : - name : string probes : enabled : bool livenessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] readinessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] useractions : files : - source : string target : string registry : currentcontrolset : - path : string software : - path : string workloads : sites : site : - applications : - applicationpool : string path : string virtualdirectories : - path : string physicalpath : string bindings : - port : int protocol : string sslflags : int connectionstrings : - connectionstring : string name : string providername : string name : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string serverautostart : bool version : string The globalSettings section The globalSettings section describes basic requirements for pods running IIS sites from this VM.
- The probes are disabled by default, to enable the probes, set the enabled flag to true . images : name : IMAGE NAME probes : enabled : false livenessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null readinessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null The windowsServices section Windows containers created during a migration run and monitor a single Windows IIS service.
- To run additional services in the migrated container, add entries to the windowsServices section, and copy the necessary binaries in the useractions section . version: v1 globalSettings: target: … globalIIS: … images: - name: migrated-image-zgwb2 workloads: sites: site: - applications: ... bindings: - port: 80 protocol: http name: Default Web Site … windowsServices: - MyService useractions: files: - source: C:\Program Files\MyService target: C:\Program Files\MyService registry: currentcontrolset: - key: services\MyService The useractions section The useractions section specifies additional files and registry keys that you might want to migrate.
- The following is an example migration plan containing identitytype : migrationPlan : applications : iis : applicationhost : apppools : - name : DefaultAppPool Allowed values include: ApplicationPoolIdentity (default), NetworkService, LocalSystem, LocalService identitytype="NetworkService" - managedruntimeversion : v4.0 name : .NET v4.5 Classic - managedruntimeversion : v4.0 name : .NET v4.5 When you execute the migration plan to generate the container artifacts, Migrate to Containers automatically adds the necessary Dockerfile directives according to the identitytype field setting.

### "Discover, collect, and assess VMware VMs for migration \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Planning best practices \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Not a good fit Linux For Linux, applications and servers that are not a good fit for migration with Migrate to Containers include: High performance and large in-memory databases VMs with special kernel drivers (for example, kernel-mode NFS) Dependencies on specific hardware Software with licenses tied to certain hardware ID registration Windows For Windows, workloads without IIS 7 or higher installed are not a fit for migration.
- Windows Windows applications that are a good fit for migration using Migrate to Containers include workloads that meet all following characteristics: IIS 7 or later, ASP.NET with .NET Framework 3.5 or later Web and logic tiers WS2008 R2 or higher Operating system support Migrate to Containers is compatible with these VM operating systems .
- The deployment spec generated by the migration process contains a suggested headless Service object of type "ClusterIP". "ClusterIP" means no load-balancing, and a single cluster internal IP reachable only from within the cluster.
- Planning best practices This topic offers advice for application migrations to Google Kubernetes Engine (GKE) or GKE Enterprise , based on migrations of real applications that have been performed with Migrate to Containers.

