---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.788Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Automatic secret creation from security realms and keystores"
feature_slug: "automatic-secret-creation-from-security-realms-and-keystores"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices"
keywords:
  - "automatic"
  - "secret"
  - "creation"
  - "security"
  - "realms"
  - "keystores"
  - "secrets"
  - "automatically"
---

# Automatic secret creation from security realms and keystores

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Secrets are automatically created from extracted security realms configuration and keystores.

## Extended Definition

Secrets are automatically created from extracted security realms configuration and keystores.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)

## Supporting Pages

### "Customize migration plan for WebSphere workloads \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere/websphere-customizing-a-migration)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defaults to 0 for Liberty profile. group : "0" Application ports to be exposed in Kubernetes artifacts. ports : - name : http - tcp - 9080 port : 9080 protocol : TCP - name : https - tcp - 9443 port : 9443 protocol : TCP Specify whether discovered keystores are automatically converted to Kubernetes secrets.
- Defaults to true. enableSecrets : true Exclude applications To exclude applications from the migration, remove them from the applications list. applications: Exclude app1.war: - path: app1.war ... - path: app2.war Control application files To control which application files are included or excluded from the migration, update the configurations and resources fields. applications: - path: app.war resources: keystores: Exclude key1.p12: - key1.p12 Include key2.p12: - key2.p12 additionalResources: Exclude resource1.xml: - resource1.xml Include resource2.xml: - resource2.xml Customize the target Java runtime To customize the target Java runtime for the application, update the targetJavaRuntime field. applications : - path : app . war targetJavaRuntime : se : SE ee : EE vendor : VENDOR Replace the following: SE : the Java SE version.
- To migrate these files as is, you can disable this feature. applications: - path: app.war resources: keystores: - key.p12 targetContainer: Do not migrate keystores to Kubernetes secrets: enableSecrets: false Customize Kubernetes ports To control which ports are exposed by Kubernetes Pods and Services, update the ports field. applications: - path: app.war targetContainer: ports: Exclude http-tcp-9080: - name: http-tcp-9080 port: 9080 protocol: TCP Include https-tcp-9443: - name: https-tcp-9443 port: 9443 protocol: TCP What's next Learn how to execute the migration .
- Customize the target container To customize the target container to be used for the application, update the targetContainer field. applications: - path: app.war targetContainer: baseImage: BASE IMAGE home: HOME server: SERVER user: USER group: GROUP Customize Kubernetes secrets By default, files listed under the keystores field are migrated to Kubernetes secrets.

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example migration plan containing identitytype : migrationPlan : applications : iis : applicationhost : apppools : - name : DefaultAppPool Allowed values include: ApplicationPoolIdentity (default), NetworkService, LocalSystem, LocalService identitytype="NetworkService" - managedruntimeversion : v4.0 name : .NET v4.5 Classic - managedruntimeversion : v4.0 name : .NET v4.5 When you execute the migration plan to generate the container artifacts, Migrate to Containers automatically adds the necessary Dockerfile directives according to the identitytype field setting.
- You can modify the list of runtimes in the migration plan by adding or removing members of msvcRuntimes : The complete list of possible values are: (The 2015 runtime also includes support for 2017, 2019, and 2022) msvcRuntimes : - MSVC2012 x64 - MSVC2013 x64 - MSVC2015 x64 - MSVC2012 x86 - MSVC2013 x86 - MSVC2015 x86 The pathEnvVarAdditionalEntries section Windows IIS applications might have non-default PATH environment variable entries, which are automatically detected on the source VM and included in the migration plan.
- For example, if you set identitytype to NetworkService the directive is in the form: RUN c:\windows\system32\inetsrv\appcmd.exe set apppool \"DefaultAppPool\" \"/-processModel.identityType:NetworkService\"; Migrate to Containers automatically adds read ACL directives to the site's folders according to the target identitytype , and for the IUSR built-in user.
- This is automatically done for application file system items where the original application account was specified either by inheritance or explicitly.

### Planning best practices \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- NFS Define NFS mounts as Persistent Volumes When you create the migration plan , NFS client mounts on the source VM are automatically discovered and added to the generated plan.
- Disable unneeded services Migrate to Containers automatically disables hardware- or environment-specific services, and a predefined set of additional services running on VMs.
- Migrating data from source NFS shares If your source VM is using an NFS share mount, this data cannot be migrated automatically.
- For example, Migrate to Containers automatically disables iptables, ip6tables, and firewalld.

