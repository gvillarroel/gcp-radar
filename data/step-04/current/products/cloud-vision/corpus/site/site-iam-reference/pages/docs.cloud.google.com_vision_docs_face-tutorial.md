---
title: "Face detection tutorial \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/docs/face-tutorial
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/docs/setup
source_metadata:
  url: https://docs.cloud.google.com/vision/docs/face-tutorial
  title: "Face detection tutorial \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Vision API
Guides
Send feedback
Face detection tutorial
Stay organized with collections
Save and categorize content based on your preferences.
Objectives
In this sample, you'll use the Google Vision API to detect faces in an
image. To prove to yourself that the faces were detected correctly, you'll then
use that data to draw a box around each face.
Viewing Code Samples: Most of the code
samples in this tutorial are taken from larger code files located in GitHub .
You can view and download the complete file from which a code sample is taken by
clicking the "View on GitHub" button provided above a sample.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Vision
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
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
Enable the Google Cloud Vision API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the Google Cloud Vision API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up your environment for using
Application Default Credentials .
Set up language-specific tasks and tools:
C#
Install the Google Client Library
Install Visual Studio 2012/2015.
Java
Install Java .
API reference .
Download and install
the Apache Maven build system. Maven will
ensure that the Google API Client Library
and the Vision API client libraries are installed when the project is
built, because we have included them in the pom.xml .
<dependency>
<groupId>com.google.apis</groupId>
<artifactId>google-api-services-vision</artifactId>
<version>v1-rev20231219-2.0.0</version>
</dependency>
<dependency>
<groupId>com.google.auth</groupId>
<artifactId>google-auth-library-oauth2-http</artifactId>
</dependency>
<dependency>
<groupId>com.google.guava</groupId>
<artifactId>guava</artifactId>
</dependency>
<dependency>
<groupId>com.google.http-client</groupId>
<artifactId>google-http-client-jackson2</artifactId>
</dependency>
...
Node.js
Install the Google Client Library
Install node.js .
API reference .
Install npm and
node-canvas . The sample code includes a
package.json to install all dependencies using
the command: npm install . Note that node-canvas has additional
dependencies you may need to install - see the node-canvas installation
doc for more information.
{
"name" : "nodejs-docs-samples-vision" ,
"private" : true ,
"license" : "Apache-2.0" ,
"author" : "Google LLC" ,
"engines" : {
"node" : ">=16.0.0"
},
"files" : [
"*.js"
],
"scripts" : {
"test" : "c8 mocha -p -j 2 system-test --timeout 600000"
},
"dependencies" : {
"@google-cloud/vision" : "^4.0.0" ,
"natural" : "^8.0.0" ,
"pureimage" : "^0.3.17" ,
"redis" : "^4.6.5" ,
"yargs" : "^17.7.1"
},
"devDependencies" : {
"@google-cloud/storage" : "^7.0.0" ,
"@types/uuid" : "^10.0.0" ,
"@types/yargs" : "^17.0.22" ,
"c8" : "^10.0.0" ,
"chai" : "^4.5.0" ,
"mocha" : "^10.2.0" ,
"uuid" : "^10.0.0"
}
}
PHP
Install the Google Client Library
Install PHP and Composer .
API reference .
Install and enable GD for PHP .
Python
Install the Google Client Library
Install Python .
API reference .
Install pillow .
Ruby
Install the Google Client Library
Install Ruby and Bundler .
API reference .
Install ImageMagick .
Create the service object
To access Google APIs using the official client SDKs, you create a service
object based on the API's discovery document, which describes the API to the
SDK. You'll need to fetch it from the Vision API's discovery service, using
your credentials:
Java
import com.google.api.client.googleapis.javanet. GoogleNetHttpTransport ;
import com.google.api.client.json. JsonFactory ;
import com.google.api.client.json.gson. GsonFactory ;
import com.google.api.services.vision.v1.Vision ;
import com.google.api.services.vision.v1.VisionScopes ;
import com.google.api.services.vision.v1.model.AnnotateImageRequest ;
import com.google.api.services.vision.v1.model.AnnotateImageResponse ;
import com.google.api.services.vision.v1.model.BatchAnnotateImagesRequest ;
import com.google.api.services.vision.v1.model.BatchAnnotateImagesResponse ;
import com.google.api.services.vision.v1.model.FaceAnnotation ;
import com.google.api.services.vision.v1.model.Feature ;
import com.google.api.services.vision.v1.model.Image ;
import com.google.api.services.vision.v1.model.Vertex ;
import com.google.auth.http. HttpCredentialsAdapter ;
import com.google.auth.oauth2. GoogleCredentials ;
import com.google.common.collect.ImmutableList ;
import java.awt.BasicStroke ;
import java.awt.Color ;
import java.awt.Graphics2D ;
import java.awt.Polygon ;
import java.awt.image.BufferedImage ;
import java.io.IOException ;
import java.nio.file.Files ;
import java.nio.file.Path ;
import java.nio.file.Paths ;
import java.security.GeneralSecurityException ;
import java.util.List ;
import javax.imageio.ImageIO ;
/** Connects to the Vision API using Application Default Credentials. */
public static Vision getVisionService () throws IOException , GeneralSecurityException {
GoogleCredentials credential =
GoogleCredentials . getApplicationDefault (). createScoped ( VisionScopes . all ());
JsonFactory jsonFactory = GsonFactory . getDefaultInstance ();
return new Vision . Builder (
GoogleNetHttpTransport . newTrustedTransport (),
jsonFactory ,
new HttpCredentialsAdapter ( credential ))
. setApplicationName ( APPLICATION_NAME )
. build ();
}
Node.js
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication
const vision = require ( ' @google-cloud/vision ' );
// Creates a client
const client = new vision . ImageAnnotatorClient ();
const fs = require ( 'fs' );
Python
from google.cloud import vision
from PIL import Image , ImageDraw
client = vision . ImageAnnotatorClient ()
Send a face detection request
To construct a request to the Vision API, first consult the API
documentation . In this case, you'll be asking the images resource
to annotate your image. A request to this API takes the form of an object with
a requests list. Each item in this list contains two bits of information:
The base64-encoded image data
A list of features you'd like annotated about that image.
For this example, you'll simply request FACE_DETECTION annotation on one
image, and return the relevant portion of the response:
Java
/** Gets up to {@code maxResults} faces for an image stored at {@code path}. */
public List<FaceAnnotation> detectFaces ( Path path , int maxResults ) throws IOException {
byte [] data = Files . readAllBytes ( path );
AnnotateImageRequest request =
new AnnotateImageRequest ()
. setImage ( new Image (). encodeContent ( data ))
. setFeatures (
ImmutableList . of (
new Feature (). setType ( "FACE_DETECTION" ). setMaxResults ( maxResults )));
Vision . Images . Annotate annotate =
vision
. images ()
. annotate ( new BatchAnnotateImagesRequest (). setRequests ( ImmutableList . of ( request )));
// Due to a bug: requests to Vision API containing large images fail when GZipped.
annotate . setDisableGZipContent ( true );
BatchAnnotateImagesResponse batchResponse = annotate . execute ();
assert batchResponse . getResponses (). size () == 1 ;
AnnotateImageResponse response = batchResponse . getResponses (). get ( 0 );
if ( response . getFaceAnnotations () == null ) {
throw new IOException (
response . getError () != null
? response . getError (). getMessage ()
: "Unknown error getting image annotations" );
}
return response . getFaceAnnotations ();
}
Node.js
async function detectFaces ( inputFile ) {
// Make a call to the Vision API to detect the faces
const request = { image : { source : { filename : inputFile }}};
const results = await client . faceDetection ( request );
const faces = results [ 0 ]. faceAnnotations ;
const numFaces = faces . length ;
console . log ( `Found ${ numFaces } face ${ numFaces === 1 ? '' : 's' } .` );
return faces ;
}
Python
def detect_face ( face_file , max_results = 4 ):
"""Uses the Vision API to detect faces in the given file.
Args:
face_file: A file-like object containing an image with faces.
Returns:
An array of Face objects with information about the picture.
"""
client = vision . ImageAnnotatorClient ()
content = face_file . read ()
image = vision . Image ( content = content )
return client . face_detection ( image = image , max_results = max_results ) . face_annotations
Process the response
Congratulations - you've detected the faces in your image! The
response to our face annotation request includes a bunch of
metadata about the detected faces, which include coordinates
of a polygon encompassing the face. At this point, though, this
is only a list of numbers. Let's use them to confirm that you have, in fact,
found the faces in your image. We'll draw polygons onto a copy of the image,
using the coordinates returned by the Vision API:
Java
/** Reads image {@code inputPath} and writes {@code outputPath} with {@code faces} outlined. */
private static void writeWithFaces ( Path inputPath , Path outputPath , List<FaceAnnotation> faces )
throws IOException {
BufferedImage img = ImageIO . read ( inputPath . toFile ());
annotateWithFaces ( img , faces );
ImageIO . write ( img , "jpg" , outputPath . toFile ());
}
/** Annotates an image {@code img} with a polygon around each face in {@code faces}. */
public static void annotateWithFaces ( BufferedImage img , List<FaceAnnotation> faces ) {
for ( FaceAnnotation face : faces ) {
annotateWithFace ( img , face );
}
}
/** Annotates an image {@code img} with a polygon defined by {@code face}. */
private static void annotateWithFace ( BufferedImage img , FaceAnnotation face ) {
Graphics2D gfx = img . createGraphics ();
Polygon poly = new Polygon ();
for ( Vertex vertex : face . getFdBoundingPoly (). getVertices ()) {
poly . addPoint ( vertex . getX (), vertex . getY ());
}
gfx . setStroke ( new BasicStroke ( 5 ));
gfx . setColor ( new Color ( 0x00ff00 ));
gfx . draw ( poly );
}
Node.js
We use the node-canvas library to draw onto images.
async function highlightFaces ( inputFile , faces , outputFile , PImage ) {
// Open the original image
const stream = fs . createReadStream ( inputFile );
let promise ;
if ( inputFile . match ( /\.jpg$/ )) {
promise = PImage . decodeJPEGFromStream ( stream );
} else if ( inputFile . match ( /\.png$/ )) {
promise = PImage . decodePNGFromStream ( stream );
} else {
throw new Error ( `Unknown filename extension ${ inputFile } ` );
}
const img = await promise ;
const context = img . getContext ( '2d' );
context . drawImage ( img , 0 , 0 , img . width , img . height , 0 , 0 );
// Now draw boxes around all the faces
context . strokeStyle = 'rgba(0,255,0,0.8)' ;
context . lineWidth = '5' ;
faces . forEach ( face = > {
context . beginPath ();
let origX = 0 ;
let origY = 0 ;
face . boundingPoly . vertices . forEach (( bounds , i ) = > {
if ( i === 0 ) {
origX = bounds . x ;
origY = bounds . y ;
context . moveTo ( bounds . x , bounds . y );
} else {
context . lineTo ( bounds . x , bounds . y );
}
});
context . lineTo ( origX , origY );
context . stroke ();
});
// Write the result to a file
console . log ( `Writing to file ${ outputFile } ` );
const writeStream = fs . createWriteStream ( outputFile );
await PImage . encodePNGToStream ( img , writeStream );
}
Python
def highlight_faces ( image , faces , output_filename ):
"""Draws a polygon around the faces, then saves to output_filename.
Args:
image: a file containing the image with the faces.
faces: a list of faces found in the file. This should be in the format
returned by the Vision API.
output_filename: the name of the image file to be created, where the
faces have polygons drawn around them.
"""
im = Image . open ( image )
draw = ImageDraw . Draw ( im )
# Sepecify the font-family and the font-size
for face in faces :
box = [( vertex . x , vertex . y ) for vertex in face . bounding_poly . vertices ]
draw . line ( box + [ box [ 0 ]], width = 5 , fill = "#00ff00" )
# Place the confidence value/score of the detected faces above the
# detection box in the output image
draw . text (
(
( face . bounding_poly . vertices )[ 0 ] . x ,
( face . bounding_poly . vertices )[ 0 ] . y - 30 ,
),
str ( format ( face . detection_confidence , ".3f" )) + "%" ,
fill = "#FF0000" ,
)
im . save ( output_filename )
Put it all together
Java
/** Annotates an image using the Vision API. */
public static void main ( String [] args ) throws IOException , GeneralSecurityException {
if ( args . length != 2 ) {
System . err . println ( "Usage:" );
System . err . printf (
"\tjava %s inputImagePath outputImagePath\n" , FaceDetectApp . class . getCanonicalName ());
System . exit ( 1 );
}
Path inputPath = Paths . get ( args [ 0 ] );
Path outputPath = Paths . get ( args [ 1 ] );
if ( ! outputPath . toString (). toLowerCase (). endsWith ( ".jpg" )) {
System . err . println ( "outputImagePath must have the file extension 'jpg'." );
System . exit ( 1 );
}
FaceDetectApp app = new FaceDetectApp ( getVisionService ());
List<FaceAnnotation> faces = app . detectFaces ( inputPath , MAX_RESULTS );
System . out . printf ( "Found %d face%s\n" , faces . size (), faces . size () == 1 ? "" : "s" );
System . out . printf ( "Writing to file %s\n" , outputPath );
app . writeWithFaces ( inputPath , outputPath , faces );
}
...
To build and run the sample, run the following commands from the sample code directory:
mvn clean compile assembly:single
java -cp target/vision-face-detection-1.0-SNAPSHOT-jar-with-dependencies.jar \
com.google.cloud.vision.samples.facedetect.FaceDetectApp \
data/face.jpg \
output.jpg
Node.js
async function main ( inputFile , outputFile ) {
const PImage = require ( 'pureimage' );
outputFile = outputFile || 'out.png' ;
const faces = await detectFaces ( inputFile );
console . log ( 'Highlighting...' );
await highlightFaces ( inputFile , faces , outputFile , PImage );
console . log ( 'Finished!' );
}
To run the sample, run the following command from the sample code directory:
node faceDetection resources/face.png
Python
def main ( input_filename , output_filename , max_results ):
with open ( input_filename , "rb" ) as image :
faces = detect_face ( image , max_results )
print ( "Found {} face {} " . format ( len ( faces ), "" if len ( faces ) == 1 else "s" ))
print ( f "Writing to file { output_filename } " )
# Reset the file pointer, so we can read the file again
image . seek ( 0 )
highlight_faces ( image , faces , output_filename )
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
