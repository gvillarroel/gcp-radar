---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.411Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Oracle Linux 9 support on Bare Metal Solution"
feature_slug: "oracle-linux-9-support-on-bare-metal-solution"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups"
keywords:
  - "oracle"
  - "supports"
  - "linux"
---

# Oracle Linux 9 support on Bare Metal Solution

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Bare Metal Solution now supports Oracle Linux 9.

## Extended Definition

Bare Metal Solution now supports Oracle Linux 9.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Log in to Oracle Linux and configure the Oracle environment: TNS ADMIN= TNSNAMES.ORA FILE LOCATION tnsping CLU1 S Review the database user account to ensure a successful connection to the Backup and DR application: sqlplus act rman user/act rman user@act svc dbstd as sysdba In the Application Details and Settings page described in Application Details and Settings for Oracle Databases , enter the service name you created ( CLU1 S ) in the Oracle Service Name field: Error Code 870 says that "ASM backups with ASM on NFS staging disks is not supported." If you receive this error, you do not have the correct setting configured in Details and Settings for the instance that you want to protect.
- The output of the command is similar to the following: [oracle@host ]# sudo rpm -ivh agent-Linux-latestversion.rpm Verifying... ################################# [100%] Preparing... ################################# [100%] Updating / installing… 1:udsagent-11.0.2-9595 ################################# [100%] Created symlink /etc/systemd/system/multi-user.target.wants/udsagent.service → /usr/lib/systemd/system/udsagent.service.
- To verify that the Oracle listener for the service and instance that you want to protect is configured and running, issue the lsnrctl status command: [oracle@test2 lib]$ lsnrctl status LSNRCTL for Linux: Version 19.0.0.0.0 - Production on 29-DEC-2022 07:43:37 Copyright (c) 1991, 2021, Oracle.
- Configure the hosts In the Backup and DR management console, go to Manage > Hosts . https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/#hosts Right-click the Linux host where you want to back up your Oracle databases and select Edit .

### Best practices for Oracle on Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Oracle recommends the following settings for Linux: Limit Soft Value Hard Value Open files 1024 65536 Maximum user processes 16384 16384 Stack size 10240 32768 Maximum locked memory At least 90% of memory At least 90% of memory Use the ulimit command to verify the soft and hard shell limits.
- Configure important settings for ASM If you are using Oracle Grid Infrastructure 12.1.0.2 or later on Linux, set up ASM with ASMFD or UDEV.
- To configure jumbo frames on Bare Metal Solution servers for Oracle RAC: View the settings of your Bare Metal Solution private network to confirm that jumbo frames have been configured: gcloud bms networks describe NETWORK NAME -- project = PROJECT ID -- region = REGION grep jumboFramesEnabled Sample output: jumboFramesEnabled : true Identify the network interfaces and their mtu size: ip link show grep mtu Sample output: 1 : lo : < LOOPBACK , UP , LOWER UP > mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000 2 : enp55s0f1 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 3 : enp55s0f2 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 4 : enp55s0f3 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 5 : enp17s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 6 : enp17s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 7 : enp173s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 8 : enp173s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 9 : bond1 : < BROADCAST , MULTICAST , MASTER , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 10 : bond1 .
- For example, enter this command to verify the soft shell limit: ulimit -S -n -u -s -l The following output shows the correct soft shell limit settings for a system with 384 GB of memory: open files (-n) 1024 max user processes (-u) 16384 stack size (kbytes, -s) 10240 max locked memory (kbytes, -l) 355263678 To verify the hard shell limits, use the following command: ulimit -H -n -u -s -l The following output shows the correct hard shell limits for a system with 384 GB of memory: open files (-n) 65536 max user processes (-u) 16384 stack size (kbytes, -s) 32768 max locked memory (kbytes, -l) 355263678 If any of the shell limits are not set correctly, modify the entries in the /etc/security/limits.conf file, as shown in the following example: oracle soft nofile 1024 oracle hard nofile 65536 oracle soft nproc 2047 oracle hard nproc 16384 oracle soft stack 10240 oracle hard stack 32768 oracle soft memlock 355263678 oracle hard memlock 355263678 grid soft nofile 1024 grid hard nofile 65536 grid soft nproc 2047 grid hard nproc 16384 grid soft stack 10240 grid hard stack 32768 grid soft memlock 355263678 grid hard memlock 355263678 Note: The autogenerated memlock value might not be appropriate.

### "Create Oracle backups with Filestore on Bare Metal Solution \_|\_ Google\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-filestore-oracle-backups)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Therefore, you need to change the ownership of the NFS mount point to the oracle user and grant the required permissions to read and write. chown -R oracle:oinstall /nfs backups chmod -R 755 /nfs backups Run an RMAN backup After you have mounted the file share in the Bare Metal Solution server, you can use it to run the RMAN backups.
- Validate the Filestore file share To validate the Filestore file share, run the following commands: df -h grep FILESTORE FILE SHARE oracle backup psoracle 1.0P 0 1.0P 0% /home/oracle/backups 10.177.199.242:/oracle backups 2.5T 484G 1.9T 21% /nfs backups cd /nfs backups touch TEST FILENAME ls -ltr total 16 drwx------.
- For this deployment, run the following command: mount \ -o hard,vers=3,proto=tcp,timeo=600,retrans=3,rsize=1048576,wsize=1048576,resvport,async \ 10.177.199.242:/oracle backups /nfs backups Note: For more information about the mount options, see Optimize and test Filestore performance .
- If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .

