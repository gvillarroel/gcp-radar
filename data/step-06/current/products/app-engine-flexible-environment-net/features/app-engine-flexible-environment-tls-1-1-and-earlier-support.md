---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.669Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App Engine flexible environment TLS 1.1-and-earlier support"
feature_slug: "app-engine-flexible-environment-tls-1-1-and-earlier-support"
latest_feature_date: "2025-08-07"
deprecation_date: "March 2025"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/php"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl"
  - "https://cloud.google.com/appengine/docs/flexible/audit-logging"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "tls"
  - "earlier"
  - "versions"
  - "deprecated"
---

# App Engine flexible environment TLS 1.1-and-earlier support

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Support for TLS versions 1.1 and earlier in App Engine flexible environment is deprecated, with a recommendation to migrate to TLS 1.2 and later; deprecated on March 2025.

## Extended Definition

Support for TLS versions 1.1 and earlier in App Engine flexible environment is deprecated, with a recommendation to migrate to TLS 1.2 and later; deprecated on March 2025.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl)
- [https://cloud.google.com/appengine/docs/flexible/audit-logging](https://cloud.google.com/appengine/docs/flexible/audit-logging)

## Supporting Pages

### "The PHP runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/php](https://docs.cloud.google.com/appengine/docs/flexible/php)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- An empty string front controller file Default PHP file name for the directory access. index.php nginx conf http include Filename of a partial nginx config, which will be included in the http section in the main nginx config file. nginx-http.conf nginx conf include Filename of a partial nginx config which will be included in the server section in the main nginx config file. nginx-app.conf nginx conf override Filename of a user supplied nginx configuration file, which will be used as the nginx main configuration file. nginx.conf php fpm conf override Filename of a user supplied php-fpm configuration file, which will be included at the bottom of the [app] section so that it will override the existing configurations. php-fpm.conf php ini override Filename of a user supplied PHP configuration file. php.ini supervisord conf addition Filename of a user supplied supervisord config file, which will be included in the main supervisord config file. additional-supervisord.conf supervisord conf override Filename of a user supplied supervisord config file, which will override the main supervisord config file. supervisord.conf You can control whether Nginx serves static files for matching URIs by setting the NGINX SERVES STATIC FILES environment variable in the build env variables section of your app.yaml file: runtime : php env : flex runtime config : document root : "web" operating system : "ubuntu24" build env variables : NGINX SERVES STATIC FILES : true Configuring supervisord in the PHP runtime The App Engine flexible environment uses supervisord to manage processes.
- The following is an example configuration file content for this case: [supervisord] nodaemon = true logfile = /dev/null logfile maxbytes = 0 pidfile = /var/run/supervisord.pid [program:react-server] command = php %(ENV APP DIR)s/index.php stdout logfile = /dev/stdout stdout logfile maxbytes=0 stderr logfile = /dev/stderr stderr logfile maxbytes=0 user = www-data autostart = true autorestart = true priority = 5 stopwaitsecs = 20 Extending the runtime The App Engine flexible environment PHP runtime can be used to create a custom runtime.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The PHP runtime Stay organized with collections Save and categorize content based on your preferences.
- Using PHP extensions The following PHP extensions are pre-installed and enabled on the system: Supported PHP versions BCMath Bzip2 Calendar ctype cURL DBA DOM Enchant EXIF Fileinfo Filter FTP GD Gettext GMP iconv Intl LDAP libxml mbstring MySQLi MySQLND OpenSSL pcntl PDO PDO MYSQL PDO PGSQL PDO SQLITE PGSQL Phar POSIX Session Shmop SimpleXML SOAP Sockets SQLite3 Tidy Tokenizer XML XMLReader XMLWriter XSL zend test Zip ( Ubuntu 22 only ) Zlib You can enable the following extensions using the php.ini file: gRPC ImageMagick Mailparse Memcached mongodb OpenCensus OpenTelemetry (PHP version 8.1 and later) OPcache protobuf Redis v7.3 and earlier APCu Bzip2 cURL FPM GMP mbstring mcrypt libsodium Memcached MySQL (PDO) (uses mysqlnd) MySQLi (uses mysqlnd) OPcache OpenSSL pcntl PostgreSQL PostgreSQL (PDO) Readline recode sem Sockets Zip Zlib The following PHP extensions are disabled by default.

### "Secure custom domains with SSL \_|\_ App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 55
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Secure custom domains with SSL Stay organized with collections Save and categorize content based on your preferences.
- Note: Starting in March 2025, support for TLS version 1.1 and earlier is deprecated.
- To obtain a certificate for use with your App Engine app: Generate your private key and a certificate signing request (CSR) by using the openssl tool: Run the following command from a directory where you want to create the server.csr file: openssl req - nodes - newkey rsa : 2048 - keyout [ MY PRIVATE KEY ] . key - out [ MY CSR ] . csr where: [MY PRIVATE KEY].key is the generated file where your private key is stored.
- To move from your own SSL certificates to Google-managed SSL certificates, or to add managed SSL certificates to an existing app with a custom domain, update your domain mapping: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain you want to secure, and click Enable managed security .

### "App Engine audit logging information \_|\_ App Engine flexible environment\

- URL: [https://cloud.google.com/appengine/docs/flexible/audit-logging](https://cloud.google.com/appengine/docs/flexible/audit-logging)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine audit logging information Stay organized with collections Save and categorize content based on your preferences.
- Audited operations The following table summarizes which API operations correspond to each audit log type in App Engine: Audit logs category App Engine operations Admin Activity audit logs apps.create apps.patch apps.repair apps.authorizedCertificates.create apps.authorizedCertificates.delete apps.authorizedCertificates.patch apps.domainMappings.create apps.domainMappings.delete apps.domainMappings.patch apps.firewall.ingressRules.batchUpdate apps.firewall.ingressRules.create apps.firewall.ingressRules.delete apps.firewall.ingressRules.patch apps.services.delete apps.services.patch apps.services.versions.create apps.services.versions.delete apps.services.versions.patch apps.services.versions.instances.debug apps.services.versions.instances.delete Data Access audit logs GetMemcacheItem SetMemcacheItem DeleteMemcacheItem FlushAllMemcacheItems Memcache audit logs only apply to operations made through Cloud Console.
- Available audit logs The following types of audit logs are available for App Engine: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.
- For earlier integrations, this object is held in the serviceData field of the AuditLog object; later integrations use the metadata field.

