---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.883Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Windows VM migration to GKE containers"
feature_slug: "windows-vm-migration-to-gke-containers"
latest_feature_date: "2020-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
keywords:
  - "windows"
  - "vm"
  - "migration"
  - "gke"
  - "containers"
  - "migrate"
  - "anthos"
  - "can"
---

# Windows VM migration to GKE containers

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Migrate for Anthos can migrate Windows VMs to workloads on GKE by cloning VM disks and generating deployment artifacts.

## Extended Definition

Migrate for Anthos can migrate Windows VMs to workloads on GKE by cloning VM disks and generating deployment artifacts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- The probes are disabled by default, to enable the probes, set the enabled flag to true . images : name : IMAGE NAME probes : enabled : false livenessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null readinessProbe : probehandler : exec : command : - powershell.exe - C:\m4a\probe.ps1 initialdelayseconds : 0 timeoutseconds : 1 periodseconds : 10 successthreshold : 1 failurethreshold : 3 terminationgraceperiodseconds : null The windowsServices section Windows containers created during a migration run and monitor a single Windows IIS service.
- The following is an example migration plan containing identitytype : migrationPlan : applications : iis : applicationhost : apppools : - name : DefaultAppPool Allowed values include: ApplicationPoolIdentity (default), NetworkService, LocalSystem, LocalService identitytype="NetworkService" - managedruntimeversion : v4.0 name : .NET v4.5 Classic - managedruntimeversion : v4.0 name : .NET v4.5 When you execute the migration plan to generate the container artifacts, Migrate to Containers automatically adds the necessary Dockerfile directives according to the identitytype field setting.
- For example, if you set identitytype to NetworkService the directive is in the form: RUN c:\windows\system32\inetsrv\appcmd.exe set apppool \"DefaultAppPool\" \"/-processModel.identityType:NetworkService\"; Migrate to Containers automatically adds read ACL directives to the site's folders according to the target identitytype , and for the IUSR built-in user.
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Set up for migration \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/prepare-for-migration)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download or upgrade Migrate to Containers CLI To download or upgrade Migrate to Containers CLI on a Windows machine, perform the following steps: cmd Find the latest version of Migrate to Containers CLI: curl -s https://m2c-cli-release.storage.googleapis.com/latest Download the latest version of Migrate to Containers CLI: curl -O "https://m2c-cli-release.storage.googleapis.com/ VERSION /windows/amd64/m2c.exe" Replace VERSION with the latest version of Migrate to Containers CLI.
- Unpack the offline Migrate to Containers CLI plugins bundle: ./m2c plugins unpack -i m2c-offline-bundle-linux.tar To add support for offline data migration, specify a container registry that is available in your local network: ./m2c plugins unpack -i m2c-offline-bundle-linux.tar --registry HOSTNAME Replace HOSTNAME with the container registry hostname.
- PowerShell Download the latest version of Migrate to Containers CLI: curl.exe -O https://m2c-cli-release.storage.googleapis.com/$(curl.exe -s https://m2c-cli-release.storage.googleapis.com/latest)/windows/amd64/m2c.exe This downloads the latest version of the Migrate to Containers CLI and Migrate to Containers plugins.
- Set up the Linux source machine Note: If you're going to migrate Windows IIS applications, you don't need to perform the steps to set up the Windows source machine for migration.

### Create a migration plan \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Migrate to Containers CLI automates the use of the binaryAppScanner.jar , available as part of the IBM WebSphere Application Server Migration Toolkit for Application Binaries , to extract configuration information and files for WebSphere Application Server applications in the source VM.
- If Migrate to Containers CLI detects a file with a size that exceeds the specified size threshold, then Migrate to Containers CLI adds a comment in the generated migration plan with a suggestion to exclude the detected file from the container image.
- Home Documentation Migration Migrate to Containers Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- What's next Learn how to customize the migration plan for the following: Linux VMs Tomcat WebSphere Liberty WebSphere traditional JBoss Apache WordPress Windows IIS services Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

