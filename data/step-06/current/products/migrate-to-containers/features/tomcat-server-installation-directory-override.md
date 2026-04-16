---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:21:10.833Z"
product_name: "Migrate to Containers"
product_slug: "migrate-to-containers"
feature_name: "Tomcat server installation directory override"
feature_slug: "tomcat-server-installation-directory-override"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan"
  - "https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan"
keywords:
  - "tomcat"
  - "server"
  - "installation"
  - "directory"
  - "override"
  - "application"
  - "replatforming"
  - "flow"
---

# Tomcat server installation directory override

Product: Migrate to Containers
Coverage: MEDIUM

## Step 02 Summary

The Tomcat application replatforming flow lets users manually specify the Tomcat server installation directory before migration.

## Extended Definition

The Tomcat application replatforming flow lets users manually specify the Tomcat server installation directory before migration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan)

## Supporting Pages

### "Customize migration plan for Tomcat servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Edit the user and group directly in your migration plan: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . userName : USERNAME groupName : GROUP NAME Replace the following: USERNAME : the username that you want to use GROUP NAME : the group name that you want to use Configure SSL When you create a new Tomcat migration, a discovery process scans the server against the different applications that are discovered.
- Edit the target catalinaHome field directly in your migration plan: tomcatServers : - name : latest . . . images : - name : tomcat-latest . . . baseImage : name : BASE IMAGE NAME catalinaHome : PATH Replace PATH with the Tomcat installation path.
- Verify Tomcat clustering configuration Tomcat clustering is used to replicate session information across all Tomcat nodes, which lets you to call any of the backend application servers and not lose client session information.
- Note: When migrating to a container image, Migrate to Containers filters out the logs directory from the Tomcat server to omit old logs.

### Create a migration plan \_|\_ Migrate to Containers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To retrieve these values, check the running Tomcat server process: ps aux grep catalina To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p tomcat-container \ -o ANALYSIS OUTPUT PATH \ -r catalina-home= PATH TO CATALINA HOME \ -r catalina-base= PATH TO CATALINA BASE \ -r java-version= JAVA VERSION Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created PATH TO CATALINA HOME : path to the root of the Tomcat installation PATH TO CATALINA BASE : path to the root of the runtime configuration of the Tomcat instance that you're migrating.
- To retrieve this value, check the running JBoss server process: ps aux grep jboss.home.dir To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p jboss-container \ -o ANALYSIS OUTPUT PATH \ -r jboss-home= PATH TO JBOSS HOME Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory ANALYSIS OUTPUT PATH : the path to the folder where you want the analysis output to be created PATH TO JBOSS HOME : path to the JBoss installation After the analysis is complete, a new directory is created in the specified output path which contains the migration plan, config.yaml .
- To retrieve this value, check the running WebSphere Application Server traditional process: ps aux grep WAS HOME Run the analysis To perform the analysis, run the following command: ./m2c analyze \ -s PATH TO COPIED FILESYSTEM \ -p websphere-traditional-container -o ANALYSIS OUTPUT PATH \ -r was-home= PATH TO WAS HOME \ --volume PATH TO BINARYAPPSCANNER :/binaryAppScanner.jar Replace the following: PATH TO COPIED FILESYSTEM : the path to copied file system directory.
- PATH TO WAS HOME : path to the WebSphere Application Server traditional installation.

### "Customize migration plan for Apache servers \_|\_ Migrate to Containers\

- URL: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example the following line enables the CGI configuration for this host only after it has been globally disabled with "a2disconf". #Include conf-available/serve-cgi-bin.conf serverName : server - 0 - address : ' :443' The location of the site content (will be copied to the same location the extracted container) documentRoot : / var / www / html includeInContainerImage : false originalConfig : - ServerAdmin admin @ example . com DocumentRoot / var / www / html SSLEngine on SSLCertificateFile / etc / ssl / certs / c2d - temporary - self - signed - cert . pem SSLCertificateKeyFile / etc / ssl / private / c2d - temporary - self - signed - cert . key < Directory / var / www / html > Options - Indexes AllowOverride FileInfo < / Directory > serverName : server - 1 php : list of php modules to be installed in the extracted container (add/remove entries to change what will be installed) modules : - calendar - ctype - curl - exif - ffi - fileinfo - filter - gd - gettext - iconv - json - mysqli - pcntl - pdo - pdo mysql - posix - shmop - sockets - sysvmsg - sysvsem - sysvshm - tokenizer - xsl Configure security policies on directories In the directories section, you can apply specific configurations to enforce security policies on certain directories.
- Migration plan structure The migration plan for Apache2 workloads has the following structure which you can customize, as described in the following sections. apacheServer : Apache configuration for directories on the system Content is the configuration as understood by apache directories : - Content : - Options FollowSymLinks AllowOverride None Require all denied Path : / - Content : - AllowOverride None Require all granted Path : / usr / share - Content : - Options Indexes FollowSymLinks AllowOverride None Require all granted Path : / var / www / - Content : "# \t Options Indexes FollowSymLinks \n # \t AllowOverride None \n # \t Require all granted " Path : / srv / - Content : - AllowOverride None Require all denied Path : / Environment variables used by apache envVars : - Value : www - data Var : APACHE RUN USER - Value : www - data Var : APACHE RUN GROUP - Value : / var / run / apache2 $ SUFFIX / apache2 . pid Var : APACHE PID FILE - Value : / var / run / apache2 $ SUFFIX Var : APACHE RUN DIR - Value : / var / lock / apache2 $ SUFFIX Var : APACHE LOCK DIR - Value : / var / log / apache2 $ SUFFIX Var : APACHE LOG DIR - Value : C Var : LANG The port the service will listen on listen : - "80" - "443" Apache modules to be loaded and installed loadModules : - Module : access compat module - Module : alias module - Module : auth basic module - Module : authn core module - Module : authn file module - Module : authz core module - Module : authz host module - Module : authz user module - Module : autoindex module - Module : deflate module - Module : dir module - Module : env module - Module : filter module - Module : mime module - Module : mpm prefork module - Module : negotiation module - Module : php7 module - Module : proxy module - Module : proxy fcgi module - Module : reqtimeout module - Module : rewrite module - Module : setenvif module - Module : socache shmcb module - Module : ssl module - Module : status module The sites to be extracted virtualHosts : - address : ' :80' documentRoot : / var / www / html should the site be enabled in extracted VM includeInContainerImage : true originalConfig : - The ServerName directive sets the request scheme, hostname and port that the server uses to identify itself.
- However, you must set it for any further virtual host explicitly. #ServerName www.example.com ServerAdmin webmaster @ localhost DocumentRoot / var / www / html Available loglevels: trace8, ..., trace1, debug, info, notice, warn, error, crit, alert, emerg.
- Edit the migration plan After you have copied the file system and analyzed it, you can find the migration plan in the new directory that is created in the specified output path: ANALYSIS OUTPUT PATH / config.yaml .

