---
title: "Go quickstart \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/quickstart/go
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/overview
source_metadata:
  url: https://developers.google.com/workspace/tasks/quickstart/go
  title: "Go quickstart \_|\_ Google Tasks \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Tasks
Guides
Send feedback
Go quickstart
Stay organized with collections
Save and categorize content based on your preferences.
Create a Go command-line application that makes requests to the
Google Tasks API.
Quickstarts explain how to set up and run an app that calls a
Google Workspace API. This quickstart uses a
simplified authentication approach that is appropriate for a testing
environment. For a production environment, we recommend learning about
authentication and authorization
before
choosing the access credentials
that are appropriate for your app.
This quickstart uses Google Workspace's recommended API client libraries
to handle some details of the authentication and authorization flow.
Objectives
Set up your environment.
Set up the sample.
Run the sample.
Prerequisites
Latest version of Go .
Latest version of Git .
A Google Cloud project .
A Google account with Google Tasks enabled.
Set up your environment
To complete this quickstart, set up your environment.
Enable the API
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
In the Google Cloud console, enable the Google Tasks API.
Enable the API
Configure the OAuth consent screen
If you're using a new Google Cloud project to complete this quickstart, configure
the OAuth consent screen. If you've already
completed this step for your Cloud project, skip to the next section.
In the Google API Console, go to Menu menu
> Google Auth platform
> Branding .
Go to Branding
If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in Branding , Audience , and Data Access . If you see a message that says Google Auth platform not configured yet , click Get Started :
Under App Information , in App name , enter a name for the app.
In User support email , choose a support email address where users can contact you if they have questions about their consent.
Click Next .
Under Audience , select Internal .
Click Next .
Under Contact Information , enter an Email address where you can be notified about any changes to your project.
Click Next .
Under Finish , review the Google API Services User Data Policy and if you agree, select I agree to the Google API Services: User Data Policy .
Click Continue .
Click Create .
For now, you can skip adding scopes.
In the future, when you create an app for use outside of your
Google Workspace organization, you must change the User type to External . Then
add the authorization scopes that your app requires. To learn more, see the full
Configure OAuth consent guide.
Authorize credentials for a desktop application
To authenticate end users and access user data in your app, you need to
create one or more OAuth 2.0 Client IDs. A client ID is used to identify a
single app to Google's OAuth servers. If your app runs on multiple platforms,
you must create a separate client ID for each platform.
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Desktop app .
In the Name field, type a name for the credential. This name is only shown in the Google API Console.
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Save the downloaded JSON file as credentials.json , and move the
file to your working directory.
Prepare the workspace
Create a working directory:
mkdir quickstart
Change to the working directory:
cd quickstart
Initialize the new module:
go mod init quickstart
Get the Google Tasks API Go client library and OAuth2.0 package:
go get google.golang.org/api/tasks/v1
go get golang.org/x/oauth2/google
Set up the sample
In your working directory, create a file named quickstart.go .
In the file, paste the following code:
tasks/quickstart/quickstart.go
View on GitHub
package main
import (
"context"
"encoding/json"
"fmt"
"log"
"net/http"
"os"
"golang.org/x/oauth2"
"golang.org/x/oauth2/google"
"google.golang.org/api/option"
"google.golang.org/api/tasks/v1"
)
// Retrieve a token, saves the token, then returns the generated client.
func getClient ( config * oauth2 . Config ) * http . Client {
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
tokFile := "token.json"
tok , err := tokenFromFile ( tokFile )
if err != nil {
tok = getTokenFromWeb ( config )
saveToken ( tokFile , tok )
}
return config . Client ( context . Background (), tok )
}
// Request a token from the web, then returns the retrieved token.
func getTokenFromWeb ( config * oauth2 . Config ) * oauth2 . Token {
authURL := config . AuthCodeURL ( "state-token" , oauth2 . AccessTypeOffline )
fmt . Printf ( "Go to the following link in your browser then type the " +
"authorization code: \n%v\n" , authURL )
var authCode string
if _ , err := fmt . Scan ( & authCode ); err != nil {
log . Fatalf ( "Unable to read authorization code: %v" , err )
}
tok , err := config . Exchange ( context . TODO (), authCode )
if err != nil {
log . Fatalf ( "Unable to retrieve token from web: %v" , err )
}
return tok
}
// Retrieves a token from a local file.
func tokenFromFile ( file string ) ( * oauth2 . Token , error ) {
f , err := os . Open ( file )
if err != nil {
return nil , err
}
defer f . Close ()
tok := & oauth2 . Token {}
err = json . NewDecoder ( f ). Decode ( tok )
return tok , err
}
// Saves a token to a file path.
func saveToken ( path string , token * oauth2 . Token ) {
fmt . Printf ( "Saving credential file to: %s\n" , path )
f , err := os . OpenFile ( path , os . O_RDWR | os . O_CREATE | os . O_TRUNC , 0600 )
if err != nil {
log . Fatalf ( "Unable to cache oauth token: %v" , err )
}
defer f . Close ()
json . NewEncoder ( f ). Encode ( token )
}
func main () {
ctx := context . Background ()
b , err := os . ReadFile ( "credentials.json" )
if err != nil {
log . Fatalf ( "Unable to read client secret file: %v" , err )
}
// If modifying these scopes, delete your previously saved token.json.
config , err := google . ConfigFromJSON ( b , tasks . TasksReadonlyScope )
if err != nil {
log . Fatalf ( "Unable to parse client secret file to config: %v" , err )
}
client := getClient ( config )
srv , err := tasks . NewService ( ctx , option . WithHTTPClient ( client ))
if err != nil {
log . Fatalf ( "Unable to retrieve tasks Client %v" , err )
}
r , err := srv . Tasklists . List (). MaxResults ( 10 ). Do ()
if err != nil {
log . Fatalf ( "Unable to retrieve task lists. %v" , err )
}
fmt . Println ( "Task Lists:" )
if len ( r . Items ) > 0 {
for _ , i := range r . Items {
fmt . Printf ( "%s (%s)\n" , i . Title , i . Id )
}
} else {
fmt . Print ( "No task lists found." )
}
}
Run the sample
In your working directory, build and run the sample:
go run quickstart.go
The first time you run the sample, it prompts you to authorize access:
If you're not already signed in to your Google Account, sign in when prompted. If
you're signed in to multiple accounts, select one account to use for authorization.
Click Accept .
Your Go application runs and calls the Google Tasks API.
Authorization information is stored in the file system, so the next time you run the sample
code, you aren't prompted for authorization.
Next steps
Try the Google Workspace APIs in the APIs explorer
Troubleshoot authentication and authorization issues
Tasks API reference documentation
google-api-go-client section of GitHub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
