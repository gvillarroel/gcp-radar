---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.533Z"
product_name: "Backup for GKE"
product_slug: "backup-for-gke"
feature_name: "Configurable resource restore order in restore plans"
feature_slug: "configurable-resource-restore-order-in-restore-plans"
latest_feature_date: "2024-06-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan"
keywords:
  - "configurable"
  - "order"
  - "plans"
  - "resource"
  - "restore"
  - "in"
  - "backup"
  - "for"
---

# Configurable resource restore order in restore plans

Product: Backup for GKE
Coverage: LOW

## Step 02 Summary

Backup for GKE now supports specifying restore order when creating or updating a restore plan.

## Extended Definition

Backup for GKE now supports specifying restore order when creating or updating a restore plan.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)

## Supporting Pages

### "Define custom backup and restore logic \_|\_ Backup for GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This example creates a ProtectedApplication resource that quiesces the file system before backing up the logs volume and unquiesces after the backup: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : nginx namespace : sales spec : resourceSelection : type : Selector selector : matchLabels : app : nginx components : - name : nginx-app resourceKind : Deployment resourceNames : [ "nginx-deployment" ] strategy : type : BackupAllRestoreAll backupAllRestoreAll : backupPreHooks : - name : freeze container : nginx command : - bash - "-c" - Add application logic to flush data to disk before snapshot and freeze the application from further changes. echo "Freezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 backupPostHooks : - name : unfreeze container : nginx command : - bash - "-c" - Add application logic to unfreeze the application. echo "Unfreezing the application" Return 0 on successful freeze of application, and non-zero for errors exit 0 Strategy: BackupOneAndRestoreAll This strategy backs up one copy of a selected Pod.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet, shows a backup of volumes of one Pod in secondary StatefulSet, and then a restore to all other volumes: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : BackupOneRestoreAll backupOneRestoreAll : backupTargetName : mariadb-secondary backupPreHooks : - name : quiesce container : mariadb command : [ ... ] backupPostHooks : - name : unquiesce container : mariadb command : [ ... ] Strategy: DumpAndLoad This strategy uses a dedicated volume for backup and restore processes and requires a dedicated PersistentVolumeClaim attached to a component that stores dump data.
- This example, assuming an architecture of one primary StatefulSet and a secondary StatefulSet with dedicated PersistentVolumeClaims for both primary and secondary StatefulSets, shows a DumpAndLoad strategy: kind : ProtectedApplication apiVersion : gkebackup.gke.io/v1 metadata : name : mariadb namespace : mariadb spec : resourceSelection : type : Selector selector : matchLabels : app : mariadb components : - name : mariadb-dump resourceKind : StatefulSet resourceNames : [ "mariadb-primary" , "mariadb-secondary" ] strategy : type : DumpAndLoad dumpAndLoad : loadTarget : mariadb-primary dumpTarget : mariadb-secondary dumpHooks : - name : db dump container : mariadb command : - bash - "-c" - mysqldump -u root --all-databases > /backup/mysql backup.dump loadHooks : - name : db load container : mariadb command : - bash - "-c" - mysql -u root < /backup/mysql backup.sql volumeSelector : matchLabels : gkebackup.gke.io/backup : dedicated-volume Check if a ProtectedApplication is ready for backup You can check whether a ProtectedApplication is ready for a backup by running the following command: kubectl describe protectedapplication APPLICATION NAME Replace APPLICATION NAME with the name of your application.
- If ready, the application description will show Ready to backup status as true , such as in this example: % kubectl describe protectedapplication nginx Name: nginx Namespace: default API Version: gkebackup.gke.io/v1 Kind: ProtectedApplication Metadata: UID: 90c04a86-9dcd-48f2-abbf-5d84f979b2c2 Spec: Components: Name: nginx Resource Kind: Deployment Resource Names: nginx Strategy: Backup All Restore All: Backup Pre Hooks: Command: /sbin/fsfreeze -f /var/log/nginx Container: nginx Name: freeze Backup Post Hooks: Command: /sbin/fsfreeze -u /var/log/nginx Container: nginx Name: unfreeze Type: BackupAllRestoreAll Resource Selection: Selector: Match Labels: app: nginx Type: Selector Status: Ready To Backup: true Events: <none> What's next Learn more about planning a set of backups .

### "Modify resources during restoration \_|\_ Backup for GKE \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To define transformation rules through gcloud CLI, create a file containing a YAML array of transformationRules and include the --transformation-rules-file= parameter in the gcloud beta container backup-restore restore-plans create command.
- The following action copies environment variables from the nginx container to the install init container. op : copy fromPath : "/spec/containers/0/env" path : "/spec/initContainers/0/env" Original apiVersion : v1 kind : Pod metadata : name : nginx namespace : ns labels : app : nginx spec : containers : - name : nginx image : nginx:latest ports : - containerPort : 80 env : - name : PROTOCOL value : "https" resources : limits : cpu : "250m" memory : "64Mi" initContainers : - name : install image : busybox:stable command : - wget - "-O" - "/tmp/index.html" - http://info.cern.ch Transformed apiVersion : v1 kind : Pod metadata : name : nginx namespace : ns labels : app : nginx spec : containers : - name : nginx image : nginx:latest ports : - containerPort : 80 env : - name : PROTOCOL value : "https" resources : limits : cpu : "250m" memory : "64Mi" initContainers : - name : install image : busybox:stable command : - wget - "-O" - "/tmp/index.html" - http://info.cern.ch env : # copy from "nginx" container - name : PROTOCOL value : https To learn more about defining transformation rules in the Google Cloud console, see Plan a set of restores .
- Change StorageClass of PVCs This example changes the StorageClass in all restored PersistentVolumeClaim resources from standard to premium-rwo : YAML transformationRules : - description : Change StorageClass in PVC from standard to premium-rwo resourceFilter : namespaces : [] jsonPath : ".spec[?(@.storageClassName == 'standard')]" groupKinds : - resourceGroup : "" resourceKind : PersistentVolumeClaim fieldActions : - op : REPLACE path : "/spec/storageClassName" value : "premium-rwo" Terraform transformation rules { description = "Change StorageClass in PVC from standard to premium-rwo" resource filter { json path = ".spec[?(@.storageClassName == 'standard')]" group kinds { resource kind = "PersistentVolumeClaim" } } field actions { op = "REPLACE" path = "/spec/storageClassName" value = "premium-rwo" } } Note: To change the StorageClass of PVC templates defined in the StatefulSet, a separate transformation rule has to be configured.
- All the resources—except CustomResourceDefinition resources, for which transformations are not available—to be restored move sequentially through this list of rules.

### Plan a set of backups \_|\_ Backup for GKE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --target-rpo-minutes = 1440 \ --exclusion-windows-file = window.yaml \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for all namespaces with 2 hours RPO and multiple exclusion windows Create a window.yaml file, containing a YAML array of exclusionWindows : one weekly window and one single occurrence window. exclusionWindows : - startTime : hours : 15 minutes : 0 duration : "5400s" daysOfWeek : daysOfWeek : - MONDAY - FRIDAY - startTime : hours : 1 minutes : 0 duration : "3600s" singleOccurrenceDate : day : 1 month : 3 year : 2024 The following command creates a backup plan for all namespaces with 2 hours target RPO and no backups allowed from 1 AM to 2 AM on March 1, 2024 and 3 PM to 4:30 PM every Monday and Friday.
- Backups are retained for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --selected-namespaces = my-ns \ --include-secrets \ --include-volume-data \ --cron-schedule = "15 " \ --backup-retain-days = 3 Create a backup plan for a selected ProtectedApplication The following command creates a backup plan to select the ProtectedApplication ( my-ns/my-app ). gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --selected-applications = my-ns1/my-app1,my-ns2/my-app2 \ --include-secrets \ --include-volume-data Note: To use this scope for a backup, you must first create ProtectedApplications in the cluster.
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --target-rpo-minutes = 120 \ --exclusion-windows-file = window.yaml \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for all namespaces with a daily cron schedule The following command creates a backup plan to schedule daily backup for all namespaces at 5:20 AM every day.
- Backups are retained for seven days and locked for three days after creation: gcloud beta container backup-restore backup-plans create BACKUP PLAN \ --location = LOCATION \ --cluster = CLUSTER \ --all-namespaces \ --include-secrets \ --include-volume-data \ --cron-schedule = "20 5 " \ --backup-retain-days = 7 \ --backup-delete-lock-days = 3 \ --locked Create a backup plan for a selected namespace with an hourly cron schedule The following command creates a backup plan to schedule hourly backup for the selected namespace ( my-ns ) at minute 15 every hour.

