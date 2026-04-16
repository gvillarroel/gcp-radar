---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.808Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Kubernetes health probe generation for Windows IIS migrations"
feature_slug: "kubernetes-health-probe-generation-for-windows-iis-migrations"
latest_feature_date: "2022-09-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
keywords:
  - "kubernetes"
  - "health"
  - "probe"
  - "generation"
  - "windows"
  - "iis"
  - "migrations"
  - "can"
---

# Kubernetes health probe generation for Windows IIS migrations

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Windows IIS migrations can generate Kubernetes readiness and liveness probes by default.

## Extended Definition

Windows IIS migrations can generate Kubernetes readiness and liveness probes by default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- The next sections discuss this structure, explain what each part is, and how to modify it. globalSettings : globalIis : enablegmsa : string apppools : - enable32bitapponwin64 : bool identitytype : string managedruntimeversion : string name : string connectionStrings : add : - connectionstring : string name : string providername : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string image : extraFeatures : - string target : baseVersion : string requirements : - string warnings : - string msvcRuntimes : - string pathEnvVarAdditionalEntries : - string images : - name : string probes : enabled : bool livenessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] readinessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] useractions : files : - source : string target : string registry : currentcontrolset : - path : string software : - path : string workloads : sites : site : - applications : - applicationpool : string path : string virtualdirectories : - path : string physicalpath : string bindings : - port : int protocol : string sslflags : int connectionstrings : - connectionstring : string name : string providername : string name : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string serverautostart : bool version : string The globalSettings section The globalSettings section describes basic requirements for pods running IIS sites from this VM.
- The probes are disabled by default, to enable the probes, set the enabled flag to true . images : name : IMAGE NAME probes : enabled : false livenessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null readinessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null The windowsServices section Windows containers created during a migration run and monitor a single Windows IIS service.
- Note: If a process in your container is able to crash on its own when it encounters an issue, or is unhealthy, you don't necessarily need a liveness probe.
- Without a health probe, kubelet can only assume the health of a container and might send traffic to a container instance that is not ready.

### "Review compatible OS, workloads, and Kubernetes versions \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Source VM operating systems Linux VM container Migrate to Containers CLI supports migrations of VMs to containers on Google Kubernetes Engine on the 64-bit Linux operating systems listed in the following table: OS Compute Engine VMware CentOS 6.0 7.0 7.0 UEFI 8.0 6.7 6.9 7.6 Debian 7.0 8.0 9.0 10.0 9.4 9.6 RHEL 6.0 7.0 7.0 UEFI 7.4 SAP 7.6 SAP 8.0 6.5 7.5 7.6 8.3 SUSE 12 12 SP3 SAP 12 SP4 SAP 15 15 SAP 15 SP1 SAP 12 SP2 12 SP3 12 SP4 15 Ubuntu 12 LTS 14 LTS 16 LTS 16 LTS minimal 18 LTS 18 LTS minimal 18 LTS UEFI 19.04 19.04 minimal 12.04.5 LTS 14.04 LTS 16.04 LTS 18.04.10 LTS Linux-based workloads For Linux-based workloads, Migrate to Containers CLI supports all Linux-based operating systems.
- Windows local machine Migrate to Containers CLI supports migrations using local machines with 64-bit Windows Server 2019 LTSC operating systems.
- Supported workloads Migrate to Containers CLI supports modernization of workloads listed in the following table: Workload Type (if applicable) Supported versions Linux VM container VMs running 64-bit Linux-based operating systems Linux-based workloads Tomcat Apache Tomcat version 8.5 - 10.0 Apache Apache HTTP Server version 2.4 JBoss WildFly (formerly known as JBoss Application Server) version 8.1.0 - 26.1.1 JBoss Enterprise Application Platform version 7.0 - 7.4 WebSphere WebSphere Application Server traditional version 8.55 and 9.05 All versions of WebSphere Application Server Liberty WordPress sites WordPress version 4.0 or later running on Apache HTTP Server version 2.4 Windows IIS application Microsoft Internet Information Services version 7 or later Note: For workloads that use a Java-based plugin, Migrate to Containers CLI only supports Java SE version 8 or later.
- Windows IIS application Migrate to Containers CLI supports the Windows operating systems listed in the following table: OS Compute Engine Windows Microsoft Windows Server 2008R2 or later ASP.NET and .NET Framework version 3.5 or later Warning: Dynamic disks have been deprecated by Microsoft, and have severe limitations with snapshots.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- Set Tomcat health probes You can monitor the downtime and ready status of your managed containers by specifying probes in your Tomcat web server migration plan.
- Note: If a process in your container can crash on its own when it encounters an issue, or becomes unhealthy, you don't necessarily need a liveness probe.
- Without a health probe, kubelet can only assume the health of a container and might send traffic to a container instance that is not ready.

