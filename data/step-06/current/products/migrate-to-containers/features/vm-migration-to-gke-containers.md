---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.895Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "VM migration to GKE containers"
feature_slug: "vm-migration-to-gke-containers"
latest_feature_date: "2019-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
keywords:
  - "vm"
  - "migration"
  - "gke"
  - "containers"
  - "supports"
  - "migrating"
  - "vmware"
  - "amazon"
---

# VM migration to GKE containers

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The product supports migrating VMware, Amazon EC2, Azure, and Compute Engine VMs to containers on Google Kubernetes Engine.

## Extended Definition

The product supports migrating VMware, Amazon EC2, Azure, and Compute Engine VMs to containers on Google Kubernetes Engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)

## Supporting Pages

### "Discover, collect, and assess VMware VMs for migration \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-quickstart)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Discover, collect, and assess VMware VMs for migration Learn how to download the Migration Center discovery client CLI and use it to remotely discover, collect, and assess virtual machine (VM) instances running on VMware for migration and containerization.
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Download the latest version of the mcdc CLI and make it executable: curl -O "https://mc-release.storage.googleapis.com/mcdc/ $( curl -s https://mc-release.storage.googleapis.com/mcdc/latest ) /mcdc" chmod +x mcdc Perform VMware inventory discovery Run the inventory discovery: ./mcdc discover vsphere -u USERNAME --url https:// VSPHERE URL Replace the following: USERNAME : your vCenter username VSPHERE URL : the URL for your vCenter Server instance or the vSphere Client The output of the discover command looks like the following: [+] Found 13 VMs Collecting data...
- These reports display the results for each of the migration targets and outlines actions to take to eliminate blockers and risks.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- The probes are disabled by default, to enable the probes, set the enabled flag to true . images : name : IMAGE NAME probes : enabled : false livenessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null readinessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null The windowsServices section Windows containers created during a migration run and monitor a single Windows IIS service.
- The following is an example migration plan containing identitytype : migrationPlan : applications : iis : applicationhost : apppools : - name : DefaultAppPool Allowed values include: ApplicationPoolIdentity (default), NetworkService, LocalSystem, LocalService identitytype="NetworkService" - managedruntimeversion : v4.0 name : .NET v4.5 Classic - managedruntimeversion : v4.0 name : .NET v4.5 When you execute the migration plan to generate the container artifacts, Migrate to Containers automatically adds the necessary Dockerfile directives according to the identitytype field setting.
- Migrate to Containers only supports a value of System.Data.SqlClient . supports the .NET Framework data provider: System.Data.SqlClient System.Data.OleDb System.Data.Odbc System.Data.OracleClient connectionstring specifies the Connection Strings used to connect to the data provider.
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.
- Set Tomcat health probes You can monitor the downtime and ready status of your managed containers by specifying probes in your Tomcat web server migration plan.
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Verify Java proxy configuration When migrating to containers, you must verify the availability of your proxy servers in your new environment.

