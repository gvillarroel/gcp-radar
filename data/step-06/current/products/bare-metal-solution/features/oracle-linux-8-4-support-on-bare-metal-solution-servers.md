---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.423Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Oracle Linux 8.4 support on Bare Metal Solution servers"
feature_slug: "oracle-linux-8-4-support-on-bare-metal-solution-servers"
latest_feature_date: "2022-08-22"
deprecation_date: "2022-08-22"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
keywords:
  - "oracle"
  - "2022"
  - "deprecated"
  - "linux"
  - "servers"
---

# Oracle Linux 8.4 support on Bare Metal Solution servers

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Support for Oracle Linux 8.4 on Bare Metal Solution servers is deprecated; deprecated on 2022-08-22.

## Extended Definition

Support for Oracle Linux 8.4 on Bare Metal Solution servers is deprecated; deprecated on 2022-08-22.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To verify that the Oracle listener for the service and instance that you want to protect is configured and running, issue the lsnrctl status command: [oracle@test2 lib]$ lsnrctl status LSNRCTL for Linux: Version 19.0.0.0.0 - Production on 29-DEC-2022 07:43:37 Copyright (c) 1991, 2021, Oracle.
- The following is a sample of the output: [oracle@test2 lib]$ tnsping ORCL TNS Ping Utility for Linux: Version 19.0.0.0.0 - Production on 29-DEC-2022 07:55:18 Copyright (c) 1997, 2021, Oracle.
- The following output example shows that the Backup and DR agent service is running correctly: [root@test2 ]# service udsagent status Redirecting to /bin/systemctl status udsagent.service udsagent.service - Google Cloud Backup and DR service Loaded: loaded (/usr/lib/systemd/system/udsagent.service; enabled; vendor preset: disabled) Active: active (running) since Wed 2022-12-28 05:05:45 UTC; 2 days ago Process: 46753 ExecStop=/act/initscripts/udsagent.init stop (code=exited, status=0/SUCCESS) Process: 46770 ExecStart=/act/initscripts/udsagent.init start (code=exited, status=0/SUCCESS) Main PID: 46789 (udsagent) Tasks: 8 (limit: 48851) Memory: 74.0M CGroup: /system.slice/udsagent.service ├─46789 /opt/act/bin/udsagent start └─60570 /opt/act/bin/udsagent start Dec 30 05:11:30 test2 su[150713]: pam unix(su:session): session closed for user oracle Dec 30 05:11:30 test2 su[150778]: (to oracle) root on none Log messages from your backups can help you diagnose issues.
- Log in to Oracle Linux and configure the Oracle environment: TNS ADMIN= TNSNAMES.ORA FILE LOCATION tnsping CLU1 S Review the database user account to ensure a successful connection to the Backup and DR application: sqlplus act rman user/act rman user@act svc dbstd as sysdba In the Application Details and Settings page described in Application Details and Settings for Oracle Databases , enter the service name you created ( CLU1 S ) in the Oracle Service Name field: Error Code 870 says that "ASM backups with ASM on NFS staging disks is not supported." If you receive this error, you do not have the correct setting configured in Details and Settings for the instance that you want to protect.

### Best practices for Oracle on Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To configure jumbo frames on Bare Metal Solution servers for Oracle RAC: View the settings of your Bare Metal Solution private network to confirm that jumbo frames have been configured: gcloud bms networks describe NETWORK NAME -- project = PROJECT ID -- region = REGION grep jumboFramesEnabled Sample output: jumboFramesEnabled : true Identify the network interfaces and their mtu size: ip link show grep mtu Sample output: 1 : lo : < LOOPBACK , UP , LOWER UP > mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000 2 : enp55s0f1 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 3 : enp55s0f2 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 4 : enp55s0f3 : < NO - CARRIER , BROADCAST , MULTICAST , UP > mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000 5 : enp17s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 6 : enp17s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 7 : enp173s0f0 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond0 state UP mode DEFAULT group default qlen 1000 8 : enp173s0f1 : < BROADCAST , MULTICAST , SLAVE , UP , LOWER UP > mtu 1500 qdisc mq master bond1 state UP mode DEFAULT group default qlen 1000 9 : bond1 : < BROADCAST , MULTICAST , MASTER , UP , LOWER UP > mtu 1500 qdisc noqueue state UP mode DEFAULT group default qlen 1000 10 : bond1 .
- Oracle recommends the following settings for Linux: Limit Soft Value Hard Value Open files 1024 65536 Maximum user processes 16384 16384 Stack size 10240 32768 Maximum locked memory At least 90% of memory At least 90% of memory Use the ulimit command to verify the soft and hard shell limits.
- Configure important settings for ASM If you are using Oracle Grid Infrastructure 12.1.0.2 or later on Linux, set up ASM with ASMFD or UDEV.
- Note: Always configure jumbo frames on your Bare Metal Solution servers before installing Oracle RAC.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- In this example, we remove lines 9 and 10 as they are associated with the disk DEMO 0001 and the WWID of 3600a0980383146354a2b522d53374247 identified in Step 1.b of this procedure. cat -n /etc/udev/rules.d/99-oracle-asmdevices.rules 1 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374244 2 ACTION=="add change", ENV{DM UUID}=="mpath-3600a0980383146354a2b522d53374244", SYMLINK+="asmdisks/DATA1", GROUP="asmadmin", OWNER="grid", MODE="0660" 3 # END ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374244 4 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374243 5 ACTION=="add change", ENV{DM UUID}=="mpath-3600a0980383146354a2b522d53374243", SYMLINK+="asmdisks/RECO1", GROUP="asmadmin", OWNER="grid", MODE="0660" 6 # END ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374243 7 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374242 8 ACTION=="add change", ENV{DM UUID}=="mpath-3600a0980383146354a2b522d53374242", SYMLINK+="asmdisks/DEMO1", GROUP="asmadmin", OWNER="grid", MODE="0660" 9 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374247 10 ACTION=="add change", ENV{DM UUID}=="mpath-3600a0980383146354a2b522d53374247", SYMLINK+="asmdisks/DEMO2", GROUP="asmadmin", OWNER="grid", MODE="0660" 11 # END ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374247 (Perform this step on all nodes in the cluster.) Apply udev ruleset changes. sudo udevadm control -R Oracle Linux Virtualization Manager Detach a storage volume through Oracle Linux Virtualization Manager 4.4.10.7.
- Edit the file remove stale lun.yml to update the vars section with the values of data center and lun wwid to match the WWID values identified in Step 1.d of this procedure. vars: ansible ssh common args: "-o StrictHostKeyChecking=no" ansible user: root ansible ssh private key file: /etc/pki/ovirt-engine/keys/engine id rsa engine fqdn: manager.olvm.test engine user: admin@internal data center: default lun wwid: 3600a0980383146354a2b522d53374244 3600a0980383146354a2b522d53374245 From the Oracle Linux Virtualization Manager engine, run the Ansible playbook. ansible-playbook /usr/share/ansible/collections/ansible collections/ovirt/ovirt/roles/remove stale lun/examples/remove stale lun.yml PLAY [oVirt remove stale LUN] ... [output skipped] TASK [ovirt.ovirt.remove stale lun : Logout from oVirt] skipping: [localhost] PLAY RECAP localhost : ok=7 changed=3 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0 Once the Ansible playbook is complete, the paths associated with the LUN are safely removed from the KVM hosts.
- Example: gcloud bms os-images describe OEL8x --project=test-project Following is a sample output: applicableInstanceTypes: - o2-highmem-224-metal - o2-standard-112-metal - o2-standard-16-metal - o2-standard-32-metal - o2-standard-48-metal code: OEL8x description: Oracle Linux 8.8 [5.4.17-2136.324.5.3.el8uek.x86 64] name: projects/bmaas-testing/locations/global/osImages/OEL8x supportedNetworkTemplates: - s200-bondaa-bondaa - s400-bondaa-bondaa Change the OS for a server You can reimage a Bare Metal Solution server with a different OS image.
- Unmount the file system /localfs01 . sudo umount /localfs01 If required, find and remove the corresponding entry for the file system /localfs01 from file /etc/fstab by commenting or deleting the relevant line. grep localfs01 /etc/fstab Sample output: grep localfs01 /etc/fstab /dev/mapper/3600a0980383146354a2b522d53374236 /localfs01 xfs defaults 0 0 Oracle ASM Detach a storage volume through Oracle ASM for RHEL7.x, RHEL 8.x, Oracle Linux 7.x, and Oracle Linux 8.x.

