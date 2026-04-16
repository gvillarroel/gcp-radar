---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.831Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "IIS site splitting"
feature_slug: "iis-site-splitting"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices"
  - "https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial"
keywords:
  - "iis"
  - "site"
  - "splitting"
  - "automatically"
  - "breaks"
  - "discovered"
  - "vm"
  - "into"
---

# IIS site splitting

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

Automatically breaks a discovered IIS VM into one container per site during migration planning.

## Extended Definition

Automatically breaks a discovered IIS VM into one container per site during migration planning.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)

## Supporting Pages

### "Customize migration plan for Windows IIS services \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you set identitytype to NetworkService the directive is in the form: RUN c:\windows\system32\inetsrv\appcmd.exe set apppool \"DefaultAppPool\" \"/-processModel.identityType:NetworkService\"; Migrate to Containers automatically adds read ACL directives to the site's folders according to the target identitytype , and for the IUSR built-in user.
- Settings related specifically to IIS The IIS related settings are divided into settings related to specific sites, which are part of the image specification, and settings related to all sites, which are following the gloabalIis section.
- The next sections discuss this structure, explain what each part is, and how to modify it. globalSettings : globalIis : enablegmsa : string apppools : - enable32bitapponwin64 : bool identitytype : string managedruntimeversion : string name : string connectionStrings : add : - connectionstring : string name : string providername : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string image : extraFeatures : - string target : baseVersion : string requirements : - string warnings : - string msvcRuntimes : - string pathEnvVarAdditionalEntries : - string images : - name : string probes : enabled : bool livenessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] readinessProbe : probehandler : exec : command : - string - string initialdelayseconds : int timeoutseconds : int periodseconds : int successthreshold : int failurethreshold : int terminationgraceperiodseconds : optional [ int ] useractions : files : - source : string target : string registry : currentcontrolset : - path : string software : - path : string workloads : sites : site : - applications : - applicationpool : string path : string virtualdirectories : - path : string physicalpath : string bindings : - port : int protocol : string sslflags : int connectionstrings : - connectionstring : string name : string providername : string name : string security : authentication : windowsAuthentication : enabled : bool providers : - value : string authorization : add : - access type : string roles : string users : string verbs : string remove : - roles : string users : string verbs : string serverautostart : bool version : string The globalSettings section The globalSettings section describes basic requirements for pods running IIS sites from this VM.
- To run additional services in the migrated container, add entries to the windowsServices section, and copy the necessary binaries in the useractions section . version: v1 globalSettings: target: … globalIIS: … images: - name: migrated-image-zgwb2 workloads: sites: site: - applications: ... bindings: - port: 80 protocol: http name: Default Web Site … windowsServices: - MyService useractions: files: - source: C:\Program Files\MyService target: C:\Program Files\MyService registry: currentcontrolset: - key: services\MyService The useractions section The useractions section specifies additional files and registry keys that you might want to migrate.

### Planning best practices \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- NFS Define NFS mounts as Persistent Volumes When you create the migration plan , NFS client mounts on the source VM are automatically discovered and added to the generated plan.
- Disable unneeded services Migrate to Containers automatically disables hardware- or environment-specific services, and a predefined set of additional services running on VMs.
- Migrating data from source NFS shares If your source VM is using an NFS share mount, this data cannot be migrated automatically.
- Kernel-mode NFS servers VMs with NFS servers running in kernel-mode cannot be migrated into GKE with Migrate to Containers.

### "Batching guest discovery and data collection \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-vmware-batch-collection-tutorial)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Split the CSV file into multiple CSV files with a subset of the VMs To split the large CSV file into smaller CSV files, use the splitter script from the Migrate to Containers repository on GitHub. tail -n +2 $1 split -d -l $num of lines - $2 for file in $2 do head -n 1 $1 > tmp file cat " $file " >> tmp file mv -f tmp file " $file " done Download the script: curl -O https://raw.githubusercontent.com/GoogleCloudPlatform/migrate-to-containers/main/scripts/mcdc/csv splitter.sh chmod +x csv splitter.sh Run the script: ./csv splitter.sh VMS CSV FILE CSV FILES PREFIX LINES PER FILE VMS CSV FILE CSV FILES PREFIX Replace the following: VMS CSV FILE : the input CSV file to split.
- Generate a CSV file with all the discovered VMs To generate a CSV file, use the export script from the Migrate to Containers repository on GitHub. vms = $( mcdc report --format csv tail -n +2 awk -F ',' '{; print $2";"$3";"$4";;;"}' ) printf "%s\n" "Name;Platform VM ID;OS Family;IP;USERNAME;PASSWORD" printf "%s\n" " $vms " The script uses the report command to generate a CSV file containing all the VMs that were discovered in the previous step.
- Split the CSV file into multiple CSV files containing a subset of the VMs.
- We recommend batching into smaller groups of less than 1,000.

