---
title: "The PHP runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/php
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/python/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/php
  title: "The PHP runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
The PHP runtime
Stay organized with collections
Save and categorize content based on your preferences.
Note: Some PHP runtimes have reached end of support . You cannot re-deploy
versions that use runtimes after their end of support date. We recommend that
you upgrade your app
to use the latest version of PHP.
The PHP runtime is the software stack responsible for
installing your application code and dependencies, and then running that
application in the flexible environment.
PHP versions
PHP 8.5 uses
buildpacks . For the full list of supported
PHP versions, and their corresponding Ubuntu
version, see the
Runtime support schedule .
To use a supported PHP version, you must:
Install gcloud CLI version 420.0.0 or later . You can update your
CLI tooling by running the gcloud components update
command. To view your installed version, you can run the gcloud version command.
Include the runtime_config and operating_system settings in your
app.yaml file
to specify an operating system.
Declare the document root for your application in the app.yaml file:
runtime : php
env : flex
runtime_config :
operating_system : "ubuntu24"
document_root : "web"
Although you can specify the project root ( . ) directory as the
document root, we recommend that you use a subdirectory for the
document_root setting.
The source code is located in the /workspace
directory instead of the root directory ( / ). If you override any configuration,
the NGINX or supervisor processes reference your configuration file in this directory. To
update corresponding references, you must:
Update any include statements in your NGINX configuration to be relative
to /workspace instead of /etc/nginx .
Some files such as gzip_params are not included. To reference
these files, include your own or copy from GitHub . Files such as mime.types and fastcgi_params are
available in /etc/nginx directory.
Some NGINX modules such as nginx-plus-module-ndk are not installed. Set the
$docroot value or add the value manually in your NGINX configuration file.
Optionally, you can specify a runtime version by:
Including the runtime_version
setting in your app.yaml . By default, the latest PHP version is used if
the runtime_version setting is not specified.
To specify PHP 8.5 on Ubuntu 24:
runtime : php
env : flex
runtime_config :
operating_system : "ubuntu24"
runtime_version : "8.5"
document_root : .
To specify the latest supported PHP version on Ubuntu 24:
runtime : php
env : flex
runtime_config :
operating_system : "ubuntu24"
document_root : .
Including a PHP version in the composer.json file.
{
"require" : {
"php" : "8.5.*"
}
}
When you specify a PHP version using MAJOR, MINOR, and PATCH,
replace PATCH
with * . Use the format MAJOR.MINOR.* .
The PHP runtime is regularly updated
to the latest release version and only supports one release version at a
time, so specifying a release version can cause an error.
See the app.yaml reference for more information.
Previous runtime versions
Warning: PHP version 7.3 and earlier have reached end of support.
App Engine blocks you from deploying your applications using runtimes that have
reached end of support. We recommend that you migrate your app to use a supported version
of PHP or use a custom runtime .
To use PHP version 7.3 and earlier , you must:
Declare the document root for your application. You can do this in your
app.yaml file:
runtime : php
env : flex
api_version : 1
runtime_config :
document_root : .
Although you can specify the project root ( . ) directory as the
document root, we recommend that you use a subdirectory for the document_root
setting.
Specify a PHP version in the composer.json file to prevent
your application from automatically upgrading when a new version of
PHP becomes available.
{
"require" : {
"php" : "7.3.*"
}
}
When you specify a PHP version using MAJOR, MINOR, and PATCH,
replace PATCH
with `*`. Use the format MAJOR.MINOR.* .
The PHP runtime is regularly updated
to the latest release version and only supports one release version at a
time, so specifying a release version can cause an error.
Support for other PHP runtimes
If you need to use a PHP version that isn't supported , you can create a
custom runtime and select a
valid base image with the PHP version you need.
For Google-supplied base images or
Docker PHP base images ,
see Building custom runtimes .
Customize NGINX
To define a custom configuration file, include the nginx-app.conf file in the
root directory of your project.
By default, the framework front controller uses the index.php file. You
might need to change this to something different for your project. For instance,
the Symfony framework uses app.php instead of index.php . You can change the
filename in the runtime_config section of your app.yaml file:
runtime : php
env : flex
runtime_config :
operating_system : "ubuntu24"
document_root : .
front_controller_file : app.php
For version 7.3 and earlier, the nginx-app.conf configuration file is included
in the server section of the main NGINX configuration file. For example, the
default configuration php-app.conf file, contains the following:
location / {
# try to serve files directly, fallback to the front controller
try_files $uri /$front_controller_file$is_args$args;
}
To define a custom configuration file, create the nginx-app.conf file in the
root directory of your project. The runtime overrides the default file with the
file you provide.
By default, the framework front controller uses the index.php file. You
might need to change this to something different for your project. For instance,
the Symfony framework uses app.php instead of index.php . You can change the
filename in the runtime_config section of your app.yaml file:
runtime : php
env : flex
runtime_config :
document_root : .
front_controller_file : app.php
OPcache
Enable OPcache in your php.ini file. See the official
doc for how to
configure OPcache.
To disable OPcache, create or edit the file php.ini with the following line:
opcache.enable=0
Dependencies
The runtime looks for a composer.json file in your
application's source directory and uses composer to install any
dependencies before starting your application. For more information on declaring
and managing packages, see Using PHP Libraries .
Using PHP extensions
The following PHP extensions are pre-installed and enabled on the system:
Supported PHP versions
BCMath
Bzip2
Calendar
ctype
cURL
DBA
DOM
Enchant
EXIF
Fileinfo
Filter
FTP
GD
Gettext
GMP
iconv
Intl
LDAP
libxml
mbstring
MySQLi
MySQLND
OpenSSL
pcntl
PDO
PDO_MYSQL
PDO_PGSQL
PDO_SQLITE
PGSQL
Phar
POSIX
Session
Shmop
SimpleXML
SOAP
Sockets
SQLite3
Tidy
Tokenizer
XML
XMLReader
XMLWriter
XSL
zend_test
Zip ( Ubuntu 22 only )
Zlib
You can enable the following extensions using the php.ini file:
gRPC
ImageMagick
Mailparse
Memcached
mongodb
OpenCensus
OpenTelemetry (PHP version 8.1 and later)
OPcache
protobuf
Redis
v7.3 and earlier
APCu
Bzip2
cURL
FPM
GMP
mbstring
mcrypt
libsodium
Memcached
MySQL (PDO) (uses mysqlnd)
MySQLi (uses mysqlnd)
OPcache
OpenSSL
pcntl
PostgreSQL
PostgreSQL (PDO)
Readline
recode
sem
Sockets
Zip
Zlib
The following PHP extensions are disabled by default.
You can enable the following extensions in the using the php.ini file:
amqp
APM (7.0+)
BCMath
Bitset
Calendar
Cassandra
couchbase (7.0+)
ds (7.0+)
eio
ev
event
Exif
FTP
GD (with PNG, JPEG and FreeType support)
gettext
gRPC
hprose
igbinary
intl
ImageMagick
jsond
krb5
lua (7.0+)
LZF
memprof
mongodb
MySQL (5.6)
oauth
OpenCensus
PCNTL
Phalcon (5.6, 7.0)
pq
protobuf
rdkafka
Redis
SeasLog
Shmop
SOAP
SQLite3
SQLite (PDO)
stomp
swoole
sync
tcpwrap
timezonedb
v8js (7.0+)
vips (7.0+)
XMLRPC
XSL
yaconf (7.0+)
yaf
yaml
To enable an extension, add a php.ini file in the root of your
application with the extension directive:
; Enable the Redis extension
extension=redis.so
; Enable the OpenTelemetry extension (must be in an opentelemetry section)
[opentelemetry]
extension=opentelemetry.so
Alternatively, you can also enable an extension by adding a require to your
composer.json :
{
"require" : {
"ext-redis" : "*"
}
}
These packages allow the installation of most popular PHP extensions. If your
application requires additional operating-system level dependencies, you must
extend the PHP runtime or use a
custom runtime to install the
appropriate packages.
HTTPS and forwarding proxies
App Engine terminates the HTTPS connection at the load balancer and forwards the
request to your application. The NGINX server is configured to set the HTTPS
environment variable ( $_SERVER["HTTPS"] ) to on when the request is made via
HTTPS.
Some applications also need to ascertain the user's IP address. This is
available in the standard X-Forwarded-For header.
Disabled functions
The following functions are disabled with the disable_functions directive in
php.ini :
exec
passthru
proc_open
proc_close
shell_exec
show_source
symlink
system
If you need any of the above functions, add a php.ini file in the root of
your application and change the disable_functions directive. Alternatively,
set whitelist_functions in the runtime_config section in app.yaml to a
comma-delimited list of functions to allow.
For PHP version 7.3 and earlier, the suhosin Security extension is
installed and configured by default to run in simulation mode.
Simulation mode logs the use of potentially dangerous functions, which will show
in the Cloud Logging UI . Turning the simulation mode off
will make your application exit when a potentially dangerous function is used.
To enable this additional security feature, add a php.ini in your project root
with the following option:
; Prevent the use of potentially dangerous functions rather than logging them
suhosin.simulation = Off
Patched functions
The function parse_str is patched and the second parameter is
mandatory. If you call parse_str with only one parameter, it will
throw a warning and the function will not be called.
Available configurations
You can include the following configurations in the runtime_config section:
Name Description Default value
document_root
Specifies DOCUMENT_ROOT for nginx and PHP. You must use
a relative path from the project root directory.
Required field
composer_flags
You can override some of the composer flags with this key.
--no-dev --prefer-dist
enable_stackdriver_integration
Supported only for version 7.3 and earlier .
When set to true, the runtime will automatically enable Google Cloud Observability
integration. This configuration requires google/cloud package
v0.33 or higher.
false
skip_lockdown_document_root
Supported only for version 7.3 and earlier .
By default, the runtime will set a strict read-only permission on all the
files and directories under the document_root directory.
When set to true , the runtime will skip changing the
permission.
false
whitelist_functions
Supported only for version 7.3 and earlier .
A comma-separated list of function names to allowlist.
An empty string
front_controller_file
Default PHP file name for the directory access.
index.php
nginx_conf_http_include
Filename of a partial nginx config, which will be included in the
http section in the main nginx config file.
nginx-http.conf
nginx_conf_include
Filename of a partial nginx config which will be included in the
server section in the main nginx config file.
nginx-app.conf
nginx_conf_override
Filename of a user supplied nginx configuration file, which will be used as
the nginx main configuration file.
nginx.conf
php_fpm_conf_override
Filename of a user supplied php-fpm configuration file, which will be
included at the bottom of the [app] section so that it will
override the existing configurations.
php-fpm.conf
php_ini_override
Filename of a user supplied PHP configuration file.
php.ini
supervisord_conf_addition
Filename of a user supplied supervisord config file, which will be included
in the main supervisord config file.
additional-supervisord.conf
supervisord_conf_override
Filename of a user supplied supervisord config file, which will override
the main supervisord config file.
supervisord.conf
You can control whether Nginx serves static files for matching URIs by setting the NGINX_SERVES_STATIC_FILES environment variable in the build_env_variables section of your app.yaml file:
runtime : php
env : flex
runtime_config :
document_root : "web"
operating_system : "ubuntu24"
build_env_variables :
NGINX_SERVES_STATIC_FILES : true
Configuring supervisord in the PHP runtime
The App Engine flexible environment uses supervisord
to manage processes. By default, supervisord runs nginx and php-fpm to
run PHP web applications; however, some applications need to run
external processes. Also such applications sometimes even do not need
nginx nor php-fpm .
If you want to add a process managed by supervisord , add a file named
additional-supervisord.conf to the project root directory. The
following is an example configuration file content for this case:
[program:quote-updater]
command = php %(ENV_APP_DIR)s/worker.php
stdout_logfile = /dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile = /dev/stderr
stderr_logfile_maxbytes=0
user = www-data
autostart = true
autorestart = true
priority = 5
stopwaitsecs = 20
If you want to replace nginx and php-fpm with your process, add a file
named supervisord.conf to the project root directory. The following
is an example configuration file content for this case:
[supervisord]
nodaemon = true
logfile = /dev/null
logfile_maxbytes = 0
pidfile = /var/run/supervisord.pid
[program:react-server]
command = php %(ENV_APP_DIR)s/index.php
stdout_logfile = /dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile = /dev/stderr
stderr_logfile_maxbytes=0
user = www-data
autostart = true
autorestart = true
priority = 5
stopwaitsecs = 20
Extending the runtime
The App Engine flexible environment PHP runtime can be used to create a custom runtime.
See Customizing the PHP Runtime for more
information.
Environment variables
The following environment variables are set by the runtime environment:
Environment variable
Description
GAE_INSTANCE
The name of the current instance.
GAE_MEMORY_MB
The amount of memory available to the application process.
GAE_SERVICE
The service name specified in your application's app.yaml
file, or if no service name is specified, it is set to default .
GAE_VERSION
The version label of the current application.
GOOGLE_CLOUD_PROJECT
The Project ID associated with your application, which is visible in
the Google Cloud console
PORT
The port that will receive HTTP requests.
You can set additional environment variables with app.yaml .
Metadata server
Each instance of your application can use the
Compute Engine metadata server to query information about the
instance, including its host name, external IP address, instance ID, custom
metadata, and service account information. App Engine doesn't allow you to set
custom metadata for each instance, but you can set
project-wide custom metadata and read it from your App
Engine and Compute Engine instances.
This example function uses the metadata server to get the external IP address of
an instance:
function get_external_ip_using_google_cloud()
{
$metadata = new Google\Cloud\Core\Compute\Metadata();
$externalIp = $metadata->get(
'instance/network-interfaces/0/access-configs/0/external-ip');
return $externalIp;
}
function get_external_ip_using_curl()
{
$url = 'http://metadata.google.internal/computeMetadata/v1/' .
'instance/network-interfaces/0/access-configs/0/external-ip';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Metadata-Flavor: Google'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
return curl_exec($ch);
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
