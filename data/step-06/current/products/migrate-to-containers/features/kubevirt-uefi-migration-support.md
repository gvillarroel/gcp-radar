---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.809Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "KubeVirt UEFI migration support"
feature_slug: "kubevirt-uefi-migration-support"
latest_feature_date: "2022-09-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
keywords:
  - "kubevirt"
  - "uefi"
  - "migration"
  - "vms"
  - "firmware"
  - "can"
  - "migrated"
  - "without"
---

# KubeVirt UEFI migration support

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

VMs using UEFI firmware can be migrated without user interaction.

## Extended Definition

VMs using UEFI firmware can be migrated without user interaction.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Linux VMs \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Customize service endpoints The migration plan includes the endpoints array that defines the ports and protocols used to create the Kubernetes Services provided by the migrated workload.
- You can optionally edit the migration plan to add your own list of services to disable in the migrated container.
- Consider excluding the below detected files and any other sparse files by uncommenting and placing them in the global filters section, or export them to a persistent volume by specifying them in the data folder section. - '- /a/b' # (1.8GB, last access 2022-02-02 10:50:30, last modified 2020-02-02 10:50:30) - '- /a/d' # (1.8GB, last access 2022-02-02 10:50:30, last modified 2020-02-02 10:50:30) Set the name of the container image The name field value in the image section defines the name of the image created from a migrated VM that is used for the container.
- For example, for the following entry in fstab : < file system> <mount point> <type> <options> <dump> <pass> 10.49.232.26:/vol1 /mnt/test nfs rw,hard 0 0 Migrate to Containers generates the following entry in the migration plan: nfsMounts : - mountPoint : /mnt/test exportedDirectory : /vol1 nfsServer : 10.49.232.26 mountOptions : - rw - hard enabled : false To configure Migrate to Containers to process entries in the nfsMounts array, set enabled to true for the mountPoint entry.

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Memory allocation During the migration process, you can specify the memory limits of applications migrated to individual containers.
- To turn off the probes, remove the probes section from the YAML file. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : tcpSocket : port : 8080 readinessProbe : tcpSocket : port : 8080 You can change this migration plan to use an existing Tomcat HTTP endpoint. tomcatServers : - name : latest images : - name : tomcat-latest ports : - 8080 probes : livenessProbe : httpGet : path : /healthz port : 8080 httpHeaders : - name : Custom-Header value : Awesome initialDelaySeconds : 3 periodSeconds : 3 readinessProbe : httpGet : tcpSocket : port : 8080 There are four predefined ways to check a container using a probe.
- Modify env variables on the script and add definitions to the migrated tomcat server, if needed (less recommended than adding env variables directly to CATALINA OPTS) by uncomment the line below #ADD --chown=root:root setenv.sh /usr/local/tomcat/bin/setenv.sh Add JVM environment variables for the tomcat server ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -Xss10M" You might also set Tomcat environment variables using the setenv.sh script, which is located in the /bin folder on your Tomcat server.
- To see the value of Xmx , run the following command: ps aux grep catalina If memory limits have been defined in your migration plan, the Dockerfile that was generated alongside other artifacts after a successful migration reflects your declaration: FROM tomcat : 8.5 - jdk11 - openjdk Add JVM environment variables for tomcat ENV CATALINA OPTS = "${CATALINA OPTS} -XX:MaxRAMPercentage=50.0 -XX:InitialRAMPercentage=50.0 -XX:+UseContainerSupport <additional variables>" This defines the initial and maximum size to be 50% of limit value.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Edit the connection strings sections Migrate to Containers automatically copies connection strings detected in the migrated VM to the migration plan.
- The probes are disabled by default, to enable the probes, set the enabled flag to true . images : name : IMAGE NAME probes : enabled : false livenessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null readinessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null The windowsServices section Windows containers created during a migration run and monitor a single Windows IIS service.
- To run additional services in the migrated container, add entries to the windowsServices section, and copy the necessary binaries in the useractions section . version: v1 globalSettings: target: … globalIIS: … images: - name: migrated-image-zgwb2 workloads: sites: site: - applications: ... bindings: - port: 80 protocol: http name: Default Web Site … windowsServices: - MyService useractions: files: - source: C:\Program Files\MyService target: C:\Program Files\MyService registry: currentcontrolset: - key: services\MyService The useractions section The useractions section specifies additional files and registry keys that you might want to migrate.
- The following is an example migration plan containing identitytype : migrationPlan : applications : iis : applicationhost : apppools : - name : DefaultAppPool Allowed values include: ApplicationPoolIdentity (default), NetworkService, LocalSystem, LocalService identitytype="NetworkService" - managedruntimeversion : v4.0 name : .NET v4.5 Classic - managedruntimeversion : v4.0 name : .NET v4.5 When you execute the migration plan to generate the container artifacts, Migrate to Containers automatically adds the necessary Dockerfile directives according to the identitytype field setting.

