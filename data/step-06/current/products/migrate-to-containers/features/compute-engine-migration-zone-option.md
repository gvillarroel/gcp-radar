---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.872Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Compute Engine migration zone option"
feature_slug: "compute-engine-migration-zone-option"
latest_feature_date: "2020-07-28"
deprecation_date: "2020-07-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/migrate-vm"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system"
keywords:
  - "compute"
  - "engine"
  - "migration"
  - "zone"
  - "option"
  - "creating"
  - "was"
  - "removed"
---

# Compute Engine migration zone option

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The --zone option for creating a Compute Engine migration was removed; deprecated on 2020-07-28.

## Extended Definition

The --zone option for creating a Compute Engine migration was removed; deprecated on 2020-07-28.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system)

## Supporting Pages

### Migrate a Linux VM using Migrate to Containers CLI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable GKE API Create a Compute Engine VM with a web server to use as source VM This section describes how to create a Compute Engine VM that serves a Hello World! web page that you can use for testing after migration is complete.
- On the quickstart-local-vm command tab, install the gke-gcloud-auth-plugin plugin : sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin Install kubectl : sudo apt-get install kubectl Connect to the cluster quickstart-cluster : gcloud container clusters get-credentials quickstart-cluster \ --zone us-central1-a --project PROJECT ID Open the migration-artifacts folder: cd migration-artifacts To expose the workload to the internet, add a new LoadBalancer service in the deployment spec.yaml file.
- Go to Google Cloud console Create a VM: gcloud compute instances create quickstart-source-vm \ --zone = us-central1-a --machine-type = e2-medium \ --subnet = default --scopes = "cloud-platform" \ --tags = http-server,https-server --image = ubuntu-2204-jammy-v20240208 \ --image-project = ubuntu-os-cloud --boot-disk-size = 10GB --boot-disk-type = pd-standard \ --boot-disk-device-name = quickstart-source-vm Allow a few minutes for the VM creation to complete.
- Go to Google Cloud console Create a VM: gcloud compute instances create quickstart-local-vm \ --zone = us-central1-a --machine-type = e2-medium \ --subnet = default --scopes = "cloud-platform" \ --tags = http-server,https-server --image = ubuntu-2204-jammy-v20240208 \ --image-project = ubuntu-os-cloud --boot-disk-size = 50GB --boot-disk-type = pd-standard \ --boot-disk-device-name = quickstart-local-vm Allow a few minutes for the VM creation to complete.

### "Customize migration plan for Apache servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migration plan structure The migration plan for Apache2 workloads has the following structure which you can customize, as described in the following sections. apacheServer : Apache configuration for directories on the system Content is the configuration as understood by apache directories : - Content : - Options FollowSymLinks AllowOverride None Require all denied Path : / - Content : - AllowOverride None Require all granted Path : / usr / share - Content : - Options Indexes FollowSymLinks AllowOverride None Require all granted Path : / var / www / - Content : "# \t Options Indexes FollowSymLinks \n # \t AllowOverride None \n # \t Require all granted " Path : / srv / - Content : - AllowOverride None Require all denied Path : / Environment variables used by apache envVars : - Value : www - data Var : APACHE RUN USER - Value : www - data Var : APACHE RUN GROUP - Value : / var / run / apache2 $ SUFFIX / apache2 . pid Var : APACHE PID FILE - Value : / var / run / apache2 $ SUFFIX Var : APACHE RUN DIR - Value : / var / lock / apache2 $ SUFFIX Var : APACHE LOCK DIR - Value : / var / log / apache2 $ SUFFIX Var : APACHE LOG DIR - Value : C Var : LANG The port the service will listen on listen : - "80" - "443" Apache modules to be loaded and installed loadModules : - Module : access compat module - Module : alias module - Module : auth basic module - Module : authn core module - Module : authn file module - Module : authz core module - Module : authz host module - Module : authz user module - Module : autoindex module - Module : deflate module - Module : dir module - Module : env module - Module : filter module - Module : mime module - Module : mpm prefork module - Module : negotiation module - Module : php7 module - Module : proxy module - Module : proxy fcgi module - Module : reqtimeout module - Module : rewrite module - Module : setenvif module - Module : socache shmcb module - Module : ssl module - Module : status module The sites to be extracted virtualHosts : - address : ' :80' documentRoot : / var / www / html should the site be enabled in extracted VM includeInContainerImage : true originalConfig : - The ServerName directive sets the request scheme, hostname and port that the server uses to identify itself.
- For example the following line enables the CGI configuration for this host only after it has been globally disabled with "a2disconf". #Include conf-available/serve-cgi-bin.conf serverName : server - 0 - address : ' :443' The location of the site content (will be copied to the same location the extracted container) documentRoot : / var / www / html includeInContainerImage : false originalConfig : - ServerAdmin admin @ example . com DocumentRoot / var / www / html SSLEngine on SSLCertificateFile / etc / ssl / certs / c2d - temporary - self - signed - cert . pem SSLCertificateKeyFile / etc / ssl / private / c2d - temporary - self - signed - cert . key < Directory / var / www / html > Options - Indexes AllowOverride FileInfo < / Directory > serverName : server - 1 php : list of php modules to be installed in the extracted container (add/remove entries to change what will be installed) modules : - calendar - ctype - curl - exif - ffi - fileinfo - filter - gd - gettext - iconv - json - mysqli - pcntl - pdo - pdo mysql - posix - shmop - sockets - sysvmsg - sysvsem - sysvshm - tokenizer - xsl Configure security policies on directories In the directories section, you can apply specific configurations to enforce security policies on certain directories.
- Customize migration plan for Apache servers You should review the migration plan file that resulted from creating a migration.
- Supported Modules access compat module alias module auth basic module authn core module authn file module authz core module authz host module authz user module autoindex module deflate module dir module env module expires module filter module mime module mpm prefork module negotiation module php7 module proxy fcgi module proxy module remoteip module reqtimeout module rewrite module setenvif module socache shmcb module ssl module status module Note: Including unknown modules in your migration plan causes the migration to fail with an error message that specifies the unknown modules.

### "Copy the source machine's file system \_|\_ Migrate to Containers \_|\_\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Direct SSH ./m2c copy ssh [ USERNAME @] HOSTNAME \ -i PATH TO PRIVATE KEY \ -o OUTPUT FILESYSTEM DIR \ --filters filters.txt gcloud ./m2c copy gcloud \ -p PROJECT ID \ -z ZONE \ -n VM NAME \ -o OUTPUT FILESYSTEM DIR \ --filters filters.txt Create a local copy of the Windows source machine file system For Windows source machines, you need to copy the disk images in VHD or VHDX format for the migration process.
- To export an image from Compute Engine, perform the following steps: Export the image to Cloud Storage using the gcloud compute images export command : gcloud compute images export \ --export-format vhdx \ --destination-uri DESTINATION URI \ --image IMAGE NAME Replace the following: DESTINATION URI : the Cloud Storage URI destination for the exported image file.
- To export a Compute Engine virtual machine (VM) instance disk, first create an image from the disk and then export the image to the local machine.
- Direct SSH To copy using direct SSH access, run the following command: ./m2c copy ssh [ USERNAME @] HOSTNAME \ -i PATH TO PRIVATE KEY \ -o OUTPUT FILESYSTEM DIR Replace the following: USERNAME : your username HOSTNAME : the hostname PATH TO PRIVATE KEY : the path to private key OUTPUT FILESYSTEM DIR : the path for the output directory on your local machine where you want to copy the source machine's file system gcloud If the source machine has a public IP, run the following command: ./m2c copy gcloud \ -p PROJECT ID \ -z ZONE \ -n VM NAME \ -o OUTPUT FILESYSTEM DIR Replace the following: PROJECT ID : the project ID ZONE : the zone of your VM VM NAME : the name of the source VM OUTPUT FILESYSTEM DIR : the path for the directory output on your local machine where you want to copy the source machine's file system If the source machine doesn't have a public IP, you can do one of the following: If you are running the Migrate to Containers CLI from a machine in the same internal network, Use the --internal-ip flag.

