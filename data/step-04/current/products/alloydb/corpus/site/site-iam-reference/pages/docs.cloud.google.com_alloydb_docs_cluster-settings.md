---
title: "View cluster and instance settings \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/cluster-settings
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/cluster-settings
  title: "View cluster and instance settings \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
View cluster and instance settings
Stay organized with collections
Save and categorize content based on your preferences.
This document describes settings for AlloyDB for PostgreSQL clusters and instances, which you can modify using the Google Cloud console or the gcloud CLI .
To view settings for a specific cluster or instance type, select one of the following.
Primary cluster
Primary instance
Secondary cluster
Secondary instance
Read pool instance
Settings
Modifiable after creation
Values
Cluster ID
N
Enter a cluster ID to uniquely identify your cluster. Composed of lowercase and uppercase letters, numbers, and hyphens; must start with a letter. The total length must be a minimum length of 8 characters and a maximum of 128 characters.
Password
Y
Set a password for the default postgres user. Composed of lowercase letters, numbers, and hyphens. The total length must be 128 characters or less. You can update the password from the Users tab in your cluster using the Google Cloud console.
Database version
N
Select a PostgreSQL version for your database. For more information about supported regions, see Database versions .
Region
N
Select a region where you want to create your cluster. For more information about supported regions, see Locations .
Private networking: Private services access or Private Service Connect
N
AlloyDB supports private IP through one of the following: Private services access : To create a private services access-enabled AlloyDB cluster, select Network: Private IP in the Google Cloud console. This option is enabled by default in the Google Cloud console.
Private Service Connect : Use the gcloud CLI to create a cluster with --enable-private-service-connect flag enabled.
You can't modify the networking option after the cluster is created.
Private networking: Private services access settings
N
If you create a private services access-enabled AlloyDB cluster, then you must also configure the following: Network : Select the VPC network that is already configured with private services access.
Network: Allocated IP range : Optional. Apply a specific private IP address range to this cluster, instead of letting AlloyDB choose an IP address range.
Data protection: continuous backups
Y
Enable continuous backups for your cluster. By default, AlloyDB lets you perform point-in-time recovery (PITR) for the previous 14 days. You can resize this window to as long as 35 days or as short as one day. For more information, see Enable and configure continuous backups .
Data protection: automated backups
Y
Enable automated backups for your cluster. Enabling automated backups sets up a daily backup schedule for your AlloyDB cluster by default. Each backup is automatically encrypted using Google-managed encryption and retained for 14 days. You can enable or disable automated backups using Google Cloud console, but to update the default schedule, use the gcloud CLI. You can update the days when you want to take an automated backup, the start time, retention period, and number of backups you want to retain for up to one year. For more information, see Enable and configure automated backups .
Maintenance: Maintenance window
Y
Select one of following: Any (default value)
Day of the week and hour of the day
AlloyDB performs maintenance tasks during day and hour set in the maintenance window. Both HA primary and basic instances experience minimal downtime of less than a second, while read pool instances have zero downtime.
Data protection: backup encryption
Y
Google managed encryption is enabled by default. Optionally, you can use Cloud Key Management Service key encryption using a key associated with your project or by entering the key path manually. For example, projects/ project-name> /locations/ location-name /keyRings/ keyring-name /cryptoKeys/ key-name for your cluster. You can update the backup encryption for your backups by updating the backup policy from the Data protection tab in your cluster using the Google Cloud console. Any new backups that you create use the updated encryption method. Existing backups remain encrypted with the method that was in place when they were created.
Encryption: Cluster encryption
N
Google managed encryption is enabled by default. Optionally, you can use Cloud KMS key encryption using a key associated with your project or you can enter the key path manually. For example, projects/ project-name> /locations/ location-name /keyRings/ keyring-name /cryptoKeys/ key-name for your cluster. After you create a cluster, you can't update the cluster encryption.
Since AlloyDB auto scales storage, so you don't need to explicitly
set a storage limit. Storage is automatically managed, and you're only charged
for the storage that you use.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
