---
title: "Building an app with PHP \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/php/building-app
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/php/building-app
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/php/building-app
  title: "Building an app with PHP \_|\_ App Engine standard environment \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Building an app with PHP
Stay organized with collections
Save and categorize content based on your preferences.
Region ID
The REGION_ID is an abbreviated code that Google assigns
based on the region you select when you create your app. The code does not
correspond to a country or province, even though some region IDs may appear
similar to commonly used country and province codes. For apps created after
February 2020, REGION_ID .r is included in
App Engine URLs. For existing apps created before this date, the
region ID is optional in the URL.
Learn more
about region IDs .
OK
Note: If you are deploying a new PHP web service to Google Cloud,
we recommend getting started with
Cloud Run .
Learn how to build an app in App Engine using either PHP version 7.4 or 8.1.
The sample app allows users to post the titles, authors,
descriptions, publication date, and images of their favorite books to a webpage.
The app stores the textual data in a Cloud SQL database and the images in a
Cloud Storage bucket.
Guide structure
Create a Google Cloud project using the Google Cloud CLI
Download the sample app
Specify dependencies with composer.json
Initialize the app and defining front controllers
Integrate with Google Cloud services
Configure the app for App Engine
Deploy the app
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Install Composer ,
the PHP dependency management tool. You must
install Composer globally on
Linux and Mac OS X systems.
Due to changes in the default
behavior for how Cloud Build uses service accounts in new projects, and
secure-by-default
organization policy changes , you might need to grant additional roles to
your deploying service account. For more information on granting specific roles,
see the troubleshooting guide .
Download the sample app
Explore the code on GitHub
Download or clone the app.
git clone https://github.com/GoogleCloudPlatform/php-docs-samples.git
Or download the sample
as a zip file and extract it.
Navigate to the getting-started directory.
cd php-docs-samples/appengine/standard/getting-started
Specify dependencies with composer.json
The app uses a front controller to route requests. The sample code in this guide
uses the Slim Framework ,
but you are free to use a web framework of your choice.
Open the composer.json file to review all direct dependencies:
{
"require" : {
"google/cloud-storage" : "^1.6" ,
"slim/slim" : "^4.0" ,
"slim/psr7" : "^1.0" ,
"slim/twig-view" : "^3.0" ,
"php-di/slim-bridge" : "^3.1" ,
"symfony/yaml" : "^5.2"
},
"autoload" : {
"psr-4" : {
"Google\\Cloud\\Samples\\AppEngine\\GettingStarted\\" : "src"
}
}
}
To install your dependencies and produce a composer.lock file, run the
following command:
composer install
The composer.lock file helps your app to retrieve the same versions of the
packages you use across multiple builds and environments.
Note: Because Cloud Build operates in a limited memory environment, you
are recommended to produce the composer.lock file locally. For more
information, see Specifying Dependencies .
Initialize the app and defining front controllers
The index.php file initializes the app and forwards all requests to controllers
defined in the ./src/controllers.php file.
// Use the composer autoloader to load dependencies.
require_once __DIR__ . '/vendor/autoload.php';
// Load the application code.
/** @var Slim\App $app */
$app = require __DIR__ . '/src/app.php';
require __DIR__ . '/src/controllers.php';
// Bootstrap the slim framework to handle the request.
$app->run();
For more on request handling, read about application startup
and handling requests .
Integrating with Google Cloud services
App Engine requires apps to integrate with external systems for data storage.
The sample app stores textual data on Cloud SQL
and images on Cloud Storage .
See the Choosing a Storage Option page
for all Google Cloud storage options.
Using Cloud SQL
In the sample app, users post books to a webpage. The app uses a Cloud SQL
database to store the titles, authors, publication date, and descriptions of the
books.
You will need to create a Cloud SQL instance before adding content to the
app's database.
Creating a Cloud SQL instance
Use the gcloud CLI to create a Cloud SQL instance:
gcloud sql instances create INSTANCE_NAME --tier= MACHINE_TYPE --region= REGION
For example, if you want to name your instance bookshelf and use the machine
type of db-n1-standard-2 in the United States central region:
gcloud sql instances create bookshelf --tier=db-n1-standard-2 --region=us-central1
Learn More :
For more information about creating a Cloud SQL instance,read the
Cloud SQL creating instances guide .
For information about instance locations, machine types, and their
effects on pricing, see the Cloud SQL pricing page .
Setting up the MySQL root user
You can use the gcloud CLI to set the root user's password
of your Cloud SQL instance:
gcloud sql users set-password USER --host= HOST --instance= INSTANCE_NAME --password= PASSWORD
For example, if you want to set the root user's password for the Cloud SQL
instance bookshelf to passw0rd! :
gcloud sql users set-password root --host=% --instance=bookshelf --password=passw0rd!
Learn more : For more information, read the
Cloud SQL creating and managing MySQL users guide .
Setting up a database on the Cloud SQL instance
To store the authors, titles, publication date, and descriptions of the books,
create a MySQL database:
gcloud sql databases create DATABASE_NAME --instance= INSTANCE_NAME
For example, if you want to create a database called book-data on the Cloud SQL instance bookshelf :
gcloud sql databases create book-data --instance=bookshelf
Learn more : For more information, read the
Cloud SQL creating and managing MySQL databases guide .
Connecting to Cloud SQL database
The sample app uses PHP's PDO
to interact with the MySQL database.
// Fill the variables below to match your Cloud SQL configuration.
// $dbConn = 'YOUR_CLOUDSQL_CONNECTION_NAME';
// $dbName = 'YOUR_CLOUDSQL_DATABASE_NAME';
// $dbUser = 'YOUR_CLOUDSQL_USER';
// $dbPass = 'YOUR_CLOUDSQL_PASSWORD';
$dsn = "mysql:unix_socket=/cloudsql/{$dbConn};dbname={$dbName}";
$pdo = new PDO($dsn, $dbUser, $dbPass);
For this tutorial, these parameters are specified as environment variables below
in Configuring the app .
Querying a single row
When the user clicks on a book, the app queries the database and returns a single
row that includes the title, author, publication date, and description of the book.
$statement = $pdo->prepare('SELECT * FROM books WHERE id = :id');
$statement->bindValue('id', $id, PDO::PARAM_INT);
$statement->execute();
$result = $statement->fetch(PDO::FETCH_ASSOC);
Learn more : For more information about how to use Cloud SQL
from the PHP runtimes, read the
Using Cloud SQL for MySQL guide .
Using Cloud Storage
The sample app uses Cloud Storage to store the images, which are binary files,
uploaded by users.
Creating a Cloud Storage bucket
Cloud Storage uses buckets to organize and control access to your data.
Use gcloud CLI to create a Cloud Storage bucket:
gcloud storage buckets create gs:// BUCKET_NAME / --location= BUCKET_REGION
For example, if you want to create a bucket called picture-storage in the
us-central1 region:
gcloud storage buckets create gs://picture-storage/ --location=us-central1
Note: picture-storage will be unavailable as a bucket name since it
has already been used. See bucket naming requirements help_outline
If successful, you see the following output:
Creating gs:// BUCKET_NAME /
If not successful, you might see the following output:
ServiceException: 409 Bucket BUCKET_NAME already exists
Try again with a different bucket name.
Learn more : For more information, read
Create buckets .
Connecting a project to a Cloud Storage bucket
To use Cloud Storage, you need to specify the
Cloud Storage library .
use Google\Cloud\Storage\StorageClient;
Storing images
Now that you have created a Cloud Storage bucket and set up a connection, you
can store images. Images can be uploaded with
predefined access controls lists (ACL)
to control access to the images.
In this sample app, uploaded images will have the predefined ACL
public-read . The public URL can be accessed via the
mediaLink property of your Cloud Storage object. You can use
this URL in an HTML image tag.
// Set your own image file path and content type below to upload an
// image to Cloud Storage.
// $imageStream = fopen('/path/to/your_image.jpg', 'r');
// $imageContentType = 'image/jpg';
$object = $bucket->upload($imageStream, [
'metadata' => ['contentType' => $imageContentType],
'predefinedAcl' => 'publicRead',
]);
$imageUrl = $object->info()['mediaLink'];
For instructions on how to read a private Cloud Storage
object, see Downloading Objects page .
Deleting images
When a user deletes a book from the app, this code removes the image from the
Cloud Storage bucket.
$object = $bucket->object($objectName);
$object->delete();
Configuring the app
You configure applications to run on App Engine using an
app.yaml file ,
which specifies the application's runtime, environment variables, and other settings.
For an app with minimal configuration requirements, the app.yaml file can be a
single line:
PHP 8.1
runtime : php81
PHP 7.4
runtime : php74
You can add further configuration options and application-specific environment
variables into the app.yaml configuration file.
Adding environment variables
The app.yaml file is where environment configuration is provided to the app.
The bookshelf example used in this guide needs configuration provided
as environment variables to know how to connect to the correct Cloud SQL
instance and Cloud Storage bucket.
To deploy your app, you need to edit the app.yaml configuration file:
# See https://cloud.google.com/appengine/docs/standard/php/config/appref for a
# complete list of `app.yaml` directives.
runtime : php84
env_variables :
GOOGLE_STORAGE_BUCKET : ""
# populate these to use the "mysql" or "postres" backends
CLOUDSQL_CONNECTION_NAME : ""
CLOUDSQL_USER : ""
CLOUDSQL_PASSWORD : ""
## Uncomment to give your database a name other than "bookshelf"
# CLOUDSQL_DATABASE_NAME: ""
Set the GOOGLE_STORAGE_BUCKET variable to the name of your Cloud Storage
bucket.
Set the CLOUDSQL_CONNECTION_NAME variable to app-name:region:instance-name
You can retrieve the necessary details by using the following gcloud
command:
gcloud sql instances describe INSTANCE
For a Cloud SQL Second Generation instance, the CLOUDSQL_CONNECTION_NAME
will be in the following format: your_project_name:your_region:your_instance
Uncomment and set the CLOUD_SQL_DATABASE_NAME variable if the database you
have created has a name other than bookshelf . In this example, te database
was created with the name book-data .
Review your app.yaml file, which should look something like:
PHP 8.1
runtime : php81
env_variables :
GOOGLE_STORAGE_BUCKET : picture-storage
CLOUDSQL_CONNECTION_NAME : sample-application:us-central1:bookshelf
CLOUDSQL_USER : root
CLOUDSQL_PASSWORD : passw0rd!
CLOUDSQL_DATABASE_NAME : book-data
PHP 7.4
runtime : php74
env_variables :
GOOGLE_STORAGE_BUCKET : picture-storage
CLOUDSQL_CONNECTION_NAME : sample-application:us-central1:bookshelf
CLOUDSQL_USER : root
CLOUDSQL_PASSWORD : passw0rd!
CLOUDSQL_DATABASE_NAME : book-data
Note: You should encrypt sensitive data such as passwords and not put them
in the app.yaml as plaintext. For production apps, use
Cloud Key Management Service to store credentials.
Deploying the application
To deploy the application, navigate to the getting-started directory and
run the following command:
gcloud app deploy
When the location prompt appears, choose a location near your app users.
App Engine is regional, which means the infrastructure that runs your
app is located in a specific geographic area. For example, this tutorial has
used the us-central1 region to deploy its storage resources. Deploy the app
in the same region to decrease latency and improve performance.
In general, choosing a location near your users is a good idea, but
there are cases when deploying your application near where its resources are
located is recommended. Read about the available
App Engine locations
and resource locations .
View the application:
gcloud app browse
Cleaning up
Delete your Google Cloud project to stop the billing for the resources
used within the project.
Note: You can't delete the default app. Warning: Deleting a project has the following consequences:
If you used an existing project, you'll also delete any other work you've
done in the project.
You can't reuse the project ID of a deleted project. If you created a custom
project ID that you plan to use in the future, delete the resources inside
the project instead. This ensures that URLs with the project ID such as
https:// PROJECT_ID . REGION_ID .r.appspot.com remain available.
To deleted your project using the following command:
gcloud projects delete PROJECT_ID
To verify the project was deleted, list your projects:
gcloud projects list
What's next
Learn how to authenticate users .
Learn more about writing application logs and interpreting system logs in
Reading and writing application logs .
Learn how to do work in the background asynchronously after your request using
Cloud Tasks .
Read about
request handling and
request routing .
For a deeper dive into how App Engine works, see the
PHP runtime environment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
