---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.837Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Windows connection strings"
feature_slug: "windows-connection-strings"
latest_feature_date: "2022-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/wordpress/wordpress-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components"
keywords:
  - "windows"
  - "connection"
  - "strings"
  - "supports"
  - "both"
  - "site"
  - "global"
  - "scopes"
---

# Windows connection strings

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Supports connection strings at both site and global scopes for Windows migrations.

## Extended Definition

Supports connection strings at both site and global scopes for Windows migrations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/wordpress/wordpress-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/wordpress/wordpress-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)

## Supporting Pages

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The next sections discuss this structure, explain what each part is, and how to modify it. globalSettings : globalIis : enablegmsa : string apppools : - enable32bitapponwin64 : bool identitytype : string managedruntimeversion : string name : string connectionStrings : add : - connectionstring : string name : string providername : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string image : extraFeatures : - string target : baseVersion : string requirements : - string warnings : - string msvcRuntimes : - string pathEnvVarAdditionalEntries : - string images : - name : string probes : enabled : bool livenessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] readinessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] useractions : files : - source : string target : string registry : currentcontrolset : - path : string software : - path : string workloads : sites : site : - applications : - applicationpool : string path : string virtualdirectories : - path : string physicalpath : string bindings : - port : int protocol : string sslflags : int connectionstrings : - connectionstring : string name : string providername : string name : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string serverautostart : bool version : string The globalSettings section The globalSettings section describes basic requirements for pods running IIS sites from this VM.
- Migrate to Containers supports connection strings at the site and global scope.
- To add a connection string to the global scope (making it accessible to all sites), edit the connection strings directly following globalIis : globalIis : enablegmsa : auto connectionStrings : connectionstring : - name : connectionname3 providername : System.Data.SqlClient connectionstring : Database=connectedDB3;Password=Welcome3;User=admin; applicationhost : ...
- Connection string external dependencies Connection strings can contain dependencies, such as a reference to a file at or to a Windows user associated with the site.

### "Customize migration plan for WordPress sites \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/wordpress/wordpress-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/wordpress/wordpress-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your WordPress site relies on a database connection, then ensure that the database is accessible from the target cluster as Migrate to Containers doesn't automatically migrate it.
- If you want to change the Docker community image, or provide your own docker image, you can modify the fromImage tag in your migration plan using the following format: Parent WordPress image for the generated container image. fromImage : wordpress:6.1-php7.4-apache Specify the database connection configuration The databaseValues section contains the database connection configuration extracted from the VM.
- 4 - apache WordPress root directory. rootDirectory : / var / www / html / Database connection values. databaseValues : - name : DB NAME value : database name here - name : DB USER value : username here - name : DB PASSWORD value : password here - name : DB HOST value : host here To add information as needed, review your migration plan details and guiding comments.
- Migration plan structure The migration plan for a WordPress workload has the following structure, which you can customize as described in the following sections. sites : - # Image name.

### "Review compatible OS, workloads, and Kubernetes versions \_|\_ Migrate to\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/compatible-components)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Supported workloads Migrate to Containers CLI supports modernization of workloads listed in the following table: Workload Type (if applicable) Supported versions Linux VM container VMs running 64-bit Linux-based operating systems Linux-based workloads Tomcat Apache Tomcat version 8.5 - 10.0 Apache Apache HTTP Server version 2.4 JBoss WildFly (formerly known as JBoss Application Server) version 8.1.0 - 26.1.1 JBoss Enterprise Application Platform version 7.0 - 7.4 WebSphere WebSphere Application Server traditional version 8.55 and 9.05 All versions of WebSphere Application Server Liberty WordPress sites WordPress version 4.0 or later running on Apache HTTP Server version 2.4 Windows IIS application Microsoft Internet Information Services version 7 or later Note: For workloads that use a Java-based plugin, Migrate to Containers CLI only supports Java SE version 8 or later.
- Windows IIS application Migrate to Containers CLI supports the Windows operating systems listed in the following table: OS Compute Engine Windows Microsoft Windows Server 2008R2 or later ASP.NET and .NET Framework version 3.5 or later Warning: Dynamic disks have been deprecated by Microsoft, and have severe limitations with snapshots.
- Windows local machine Migrate to Containers CLI supports migrations using local machines with 64-bit Windows Server 2019 LTSC operating systems.
- Windows IIS application For Windows IIS applications, Migrate to Containers CLI supports all versions of Windows-based nodes.

