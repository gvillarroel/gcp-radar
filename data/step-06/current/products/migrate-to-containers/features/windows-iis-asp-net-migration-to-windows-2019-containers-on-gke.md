---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.891Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Windows IIS ASP.NET migration to Windows 2019 containers on GKE"
feature_slug: "windows-iis-asp-net-migration-to-windows-2019-containers-on-gke"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components"
  - "https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices"
keywords:
  - "windows"
  - "iis"
  - "asp"
  - "net"
  - "migration"
  - "2019"
  - "containers"
  - "gke"
---

# Windows IIS ASP.NET migration to Windows 2019 containers on GKE

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Preview support adds migration of Windows VMs running IIS ASP.NET web applications to Windows 2019 containers on GKE.

## Extended Definition

Preview support adds migration of Windows VMs running IIS ASP.NET web applications to Windows 2019 containers on GKE.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)

## Supporting Pages

### "Review compatible OS, workloads, and Kubernetes versions \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Windows IIS application Migrate to Containers CLI supports the Windows operating systems listed in the following table: OS Compute Engine Windows Microsoft Windows Server 2008R2 or later ASP.NET and .NET Framework version 3.5 or later Warning: Dynamic disks have been deprecated by Microsoft, and have severe limitations with snapshots.
- Windows local machine Migrate to Containers CLI supports migrations using local machines with 64-bit Windows Server 2019 LTSC operating systems.
- Supported workloads Migrate to Containers CLI supports modernization of workloads listed in the following table: Workload Type (if applicable) Supported versions Linux VM container VMs running 64-bit Linux-based operating systems Linux-based workloads Tomcat Apache Tomcat version 8.5 - 10.0 Apache Apache HTTP Server version 2.4 JBoss WildFly (formerly known as JBoss Application Server) version 8.1.0 - 26.1.1 JBoss Enterprise Application Platform version 7.0 - 7.4 WebSphere WebSphere Application Server traditional version 8.55 and 9.05 All versions of WebSphere Application Server Liberty WordPress sites WordPress version 4.0 or later running on Apache HTTP Server version 2.4 Windows IIS application Microsoft Internet Information Services version 7 or later Note: For workloads that use a Java-based plugin, Migrate to Containers CLI only supports Java SE version 8 or later.
- Source VM operating systems Linux VM container Migrate to Containers CLI supports migrations of VMs to containers on Google Kubernetes Engine on the 64-bit Linux operating systems listed in the following table: OS Compute Engine VMware CentOS 6.0 7.0 7.0 UEFI 8.0 6.7 6.9 7.6 Debian 7.0 8.0 9.0 10.0 9.4 9.6 RHEL 6.0 7.0 7.0 UEFI 7.4 SAP 7.6 SAP 8.0 6.5 7.5 7.6 8.3 SUSE 12 12 SP3 SAP 12 SP4 SAP 15 15 SAP 15 SP1 SAP 12 SP2 12 SP3 12 SP4 15 Ubuntu 12 LTS 14 LTS 16 LTS 16 LTS minimal 18 LTS 18 LTS minimal 18 LTS UEFI 19.04 19.04 minimal 12.04.5 LTS 14.04 LTS 16.04 LTS 18.04.10 LTS Linux-based workloads For Linux-based workloads, Migrate to Containers CLI supports all Linux-based operating systems.

### Planning best practices \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Windows Windows applications that are a good fit for migration using Migrate to Containers include workloads that meet all following characteristics: IIS 7 or later, ASP.NET with .NET Framework 3.5 or later Web and logic tiers WS2008 R2 or higher Operating system support Migrate to Containers is compatible with these VM operating systems .
- Not a good fit Linux For Linux, applications and servers that are not a good fit for migration with Migrate to Containers include: High performance and large in-memory databases VMs with special kernel drivers (for example, kernel-mode NFS) Dependencies on specific hardware Software with licenses tied to certain hardware ID registration Windows For Windows, workloads without IIS 7 or higher installed are not a fit for migration.
- Good fit Linux Linux applications that are a good fit for migration using Migrate to Containers include the following application architectures: Web/Application Servers Business logic Middleware (for example, Tomcat) Multi-VM, multi-tier stacks (for example, LAMP) Small/Medium sized Databases (for example, MySQL and PostgreSQL) In addition, applications best suited for migration with Migrate to Containers have the following operational characteristics: Low duty-cycle & bursty workloads Development, testing and training lab environments Always-on, low load services In general, most Linux workloads are compatible with migration, except for those workloads explicitly listed below under Not a good fit .
- Maintain and update migrated VMs Using the artifacts you generate during migration, you can apply application and user-mode OS software updates, security patches, editing embedded configurations, adding or replacing files, and for updating the Migrate to Containers runtime software.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- The probes are disabled by default, to enable the probes, set the enabled flag to true . images : name : IMAGE NAME probes : enabled : false livenessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null readinessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null The windowsServices section Windows containers created during a migration run and monitor a single Windows IIS service.
- You can modify the list of runtimes in the migration plan by adding or removing members of msvcRuntimes : The complete list of possible values are: (The 2015 runtime also includes support for 2017, 2019, and 2022) msvcRuntimes : - MSVC2012 x64 - MSVC2013 x64 - MSVC2015 x64 - MSVC2012 x86 - MSVC2013 x86 - MSVC2015 x86 The pathEnvVarAdditionalEntries section Windows IIS applications might have non-default PATH environment variable entries, which are automatically detected on the source VM and included in the migration plan.
- The following is an example migration plan containing identitytype : migrationPlan : applications : iis : applicationhost : apppools : - name : DefaultAppPool Allowed values include: ApplicationPoolIdentity (default), NetworkService, LocalSystem, LocalService identitytype="NetworkService" - managedruntimeversion : v4.0 name : .NET v4.5 Classic - managedruntimeversion : v4.0 name : .NET v4.5 When you execute the migration plan to generate the container artifacts, Migrate to Containers automatically adds the necessary Dockerfile directives according to the identitytype field setting.
- For example, if you set identitytype to NetworkService the directive is in the form: RUN c:\windows\system32\inetsrv\appcmd.exe set apppool \"DefaultAppPool\" \"/-processModel.identityType:NetworkService\"; Migrate to Containers automatically adds read ACL directives to the site's folders according to the target identitytype , and for the IUSR built-in user.

