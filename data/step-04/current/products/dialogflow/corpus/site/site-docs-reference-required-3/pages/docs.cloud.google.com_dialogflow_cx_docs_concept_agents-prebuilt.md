---
title: "Prebuilt agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/agents-prebuilt
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/agents-prebuilt
  title: "Prebuilt agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Prebuilt agents
Stay organized with collections
Save and categorize content based on your preferences.
Prebuilt agents are a collection of agents provided by Dialogflow CX for common use
cases.
These agents can be used to establish a base for building conversations.
In Dialogflow CX, you will find popular use cases across industries,
such as telecommunications, financial services, healthcare, retail, and travel.
Generative prebuilt agents are
also available with limited access, demonstrating common use cases implemented using
generative features .
Prebuilt agents include intents and entities for their use cases, but you need
to modify the example
route groups and fulfillment (where applicable).
Note: Importing a prebuilt agent creates a new agent. If you want to include
prebuilt agent functionality in an existing agent, you can export flows
from the newly created prebuilt agent and import
them to your existing agent.
Limitations
The following limitations apply:
Prebuilt agents currently only support English (en).
Import a prebuilt agent
To import a prebuilt agent to your project:
Go to the Dialogflow CX console .
Click the project where you would like to import the prebuilt agent.
Click Use pre-built agents .
Click the agent of interest and click Import .
Choose your desired location and click Create .
Start testing and customizing.
Customize the imported prebuilt agent
Test the agent
using the simulator to understand what it can help users accomplish.
Click the Manage tab in the left pane and then Test Cases to see coverage
and example scripts. For more information, see the
Test cases documentation.
Delete any flows that are
irrelevant to your use case.
Edit agent dialogue and custom entities
to meet your business needs.
If there is webhook source code ,
see Modifying webhook code .
Modifying webhook code
A selection of the prebuilt agents utilize webhooks. The original webhook source
code uses Node.js and is hosted in Google's internal Cloud Functions project.
To use and modify this code in your own Cloud Functions project, please follow
the subsequent directions:
Go to the Dialogflow CX console .
Click the project where you would like to import the prebuilt agent.
Click Use pre-built agents .
Click the agent of interest then click Documentation link , which will
bring you to the relevant pre-built agent section of this document.
See the Webhook subsection for the prebuilt agent and copy the source
code.
Go to the Google Cloud console and select Cloud Functions on the left
panel.
Click the project where you would like to import the source code.
Click Create Function .
For further instructions, take a look at
the Create a Cloud Function
documentation.
Under the Source code section, select Inline Editor and paste the
copied source code.
Click Source and then Edit to change the logic based on your
business rules. Once finished, click Deploy .
Click Trigger and copy the Trigger URL .
Replace that Trigger URL in your agent by going to Manage > Webhooks
and selecting the webhook to paste the new URL into. Paste the Trigger URL
into the field labeled Webhook URL. Click Save .
Using the Webhooks documentation, test
your fulfillment.
Financial services agent
This template helps end-users with their cards, checks
an application status, and investigates suspicious charges.
Sample utterances
I'd like to make a payment towards my balance.
I lost my card and need a new one.
I want to report some suspicious activity on my checking account.
What is my auto loan application status?
What are the different annual fees on your business credit cards?
Webhook
The Cloud Functions webhook performs the following actions:
Validates an end-user's identity
Provides sample balances, loan status, and credit card feature information
Mocks sample payments, including validating payment amounts and dates
Controls opening hours
package.json
{
"name": "sample-http",
"version": "0.0.1"
}
index.js
/**
* Responds to any HTTP request.
*
* @param {!express:Request} req HTTP request context.
* @param {!express:Response} res HTTP response context.
*/
exports . cxPrebuiltAgentsFinServ = ( req , res ) => {
console . log ( 'Cloud Function:' , 'Invoked cloud function from Dialogflow CX' );
let tag = req . body . fulfillmentInfo . tag ;
if ( !! tag ) {
switch ( tag ) {
// BEGIN validateAccount
case 'validateAccount' :
console . log ( tag + ' was triggered.' );
let card_last_four = req . body . sessionInfo . parameters . card_last_four ;
let card_verified ;
// card validation only fails if card number is 0000
if ( card_last_four == '0000' ) {
card_verified = 'false' ;
} else {
card_verified = 'true' ;
}
res . status ( 200 ). send (
{ sessionInfo : { parameters : { card_verified : card_verified }}} );
console . log ( ' verified: ' + card_verified );
break ;
// BEGIN getAccountInfo
case 'getAccountInfo' :
console . log ( tag + ' was triggered.' );
let current_balance ;
let last_statement_balance ;
let minimum_due ;
// Random current balance between 1 and 1000
current_balance = Math . floor ( Math . random () * 1000 );
// Last statement balance is 70 % of current balance
last_statement_balance = Math . floor ( current_balance * 0.7 );
// Minimum due is 25 % of last statement balance
minimum_due = Math . floor ( last_statement_balance * 0.25 );
res . status ( 200 ). send ( {
sessionInfo : {
parameters : {
current_balance : current_balance ,
last_statement_balance : last_statement_balance ,
minimum_due : minimum_due
}
}
} );
console . log (
'current balance: ' + current_balance +
' last statement balance: ' + last_statement_balance );
break ;
// BEGIN getPaymentSource
case 'getPaymentSource' :
console . log ( tag + ' was triggered.' );
// static array of account names
let account_names =
[ 'National Checking Account', 'My Checking', 'Personal Checking' ] ;
// random array value for account names
let account_index = Math . floor ( Math . random () * account_names . length );
let selected_account = account_names [ account_index ] ;
res . status ( 200 ). send (
{ sessionInfo : { parameters : { selected_account : selected_account }}} );
console . log ( ' selected account: ' + selected_account );
break ;
// BEGIN submitPayment
case 'submitPayment' :
console . log ( tag + ' was triggered.' );
let card_digits =
String ( req . body . sessionInfo . parameters . card_last_four );
let payment_status ;
// When first digit of card_digits is 9 the transaction fails
if ( card_digits [ 0 ] == '9' ) {
payment_status = 'fail' ;
} else {
payment_status = 'success' ;
}
res . status ( 200 ). send (
{ sessionInfo : { parameters : { payment_status : payment_status }}} );
console . log ( ' verified: ' + card_verified );
break ;
// BEGIN validatePaymentAmount
case 'validatePaymentAmount' :
console . log ( tag + ' was triggered.' );
// get payment amount
let payment_amount =
Number ( req . body . sessionInfo . parameters . other_amount );
let current_balance_temp =
req . body . sessionInfo . parameters . current_balance ;
let amount_valid ;
payment_amount = Number ( payment_amount );
console . log (
` payment_amount : ` + payment_amount + ` current balance : ` +
current_balance_temp );
// confirm payment amount is a positive value less than or equal to the
// current balance
if ( payment_amount > 0 ) {
if ( payment_amount current_balance_temp ) {
amount_valid = true ;
} else {
amount_valid = false ;
}
} else {
amount_valid = false ;
}
res . status ( 200 ). send (
{ sessionInfo : { parameters : { amount_valid : amount_valid }}} );
console . log ( 'payment status: ' + payment_status );
break ;
// BEGIN validatePaymentDate
case 'validatePaymentDate' :
console . log ( tag + ' was triggered.' );
// get payment date
let payment_date_raw = req . body . sessionInfo . parameters . payment_date ;
// set payment date in date object format . subtract one from month
// because month is indexed to 0.
let payment_year = payment_date_raw . year ;
let payment_month = payment_date_raw . month - 1 ;
let payment_day = payment_date_raw . day ;
console . log (
'Payment - Year: ' + payment_year + ' Month ' + payment_month +
' Day: ' + payment_day );
// set today 's date
let today = new Date();
let this_year = today.getFullYear();
let this_month = today.getMonth();
let this_day = today.getDate();
console.log(
' Today - Year : ' + this_year + ' Month ' + this_month +
' Day : ' + this_day);
let payment_date_valid;
// check if the payment date is after today
if (payment_year > this_year) {
payment_date_valid = true;
console.log(' Future year ');
} else if (payment_year == this_year && payment_month > this_month) {
payment_date_valid = true;
console.log(' Future month ');
} else if (
payment_year == this_year && payment_month == this_month &&
payment_day >= this_day) {
payment_date_valid = true;
console.log(' Today or later this month ');
} else {
payment_date_valid = false;
}
res.status(200).send({
sessionInfo: {parameters: {payment_date_valid: payment_date_valid}}
});
console.log(' payment date valid : ' + payment_date_valid);
break;
// BEGIN checkInHours
case ' checkInHours ':
console.log(tag + ' was triggered . ');
// check if we are currently in hours
let currentDate = new Date();
console.log(' current time is ' + currentDate);
let currentHour = currentDate.getHours();
console.log(' current hour is ' + currentHour);
if (currentHour >= 8 && currentHour
in_hours = ' true ';
console.log(' currently in hours ');
} else {
in_hours = ' false ';
console.log(' currently out of hours ');
}
res.status(200).send({sessionInfo: {parameters: {in_hours: in_hours}}});
break;
// BEGIN getRetryCount
case ' getRetryCount ':
console.log(tag + ' was triggered . ');
// increment the current retry counter
let retry_count = req.body.sessionInfo.parameters.retry_count;
retry_count = retry_count + 1;
res.status(200).send(
{sessionInfo: {parameters: {retry_count: retry_count}}});
break;
// BEGIN getLoanStatus
case ' getLoanStatus ':
console.log(tag + ' was triggered . ');
let loan_reference =
String(req.body.sessionInfo.parameters.loan_reference);
let loan_type = loan_reference[0];
let loan_status = loan_reference[1];
let loan_found = ' true ';
console.log(' loan ref is ' + loan_reference);
console.log(' type is ' + loan_type);
console.log(' status is ' + loan_status);
// mock loan not found
if (loan_reference[0] == ' 0 ') {
loan_found = ' false ';
}
// mock loan found
if ((loan_type != ' auto ') && (loan_type != ' home ')) {
if (loan_reference[0] > ' 5 ') {
loan_type = ' home ';
} else {
loan_type = ' auto ';
}
}
res.status(200).send({
sessionInfo: {
parameters: {
loan_type: loan_type,
loan_status: loan_status,
loan_found: loan_found
}
}
});
break;
// BEGIN validateTransactionDate
case ' validateTransactionDate ':
console.log(tag + ' was triggered . ');
// get date queried
let date_queried_raw = req.body.sessionInfo.parameters.date_queried;
// set date queried in date object format. subtract one from month
// because month is indexed to 0.
date_queried = new Date(
date_queried_raw.year, date_queried_raw.month - 1,
date_queried_raw.day);
console.log(date_queried + ' is the date im looking for . ');
let date_valid;
let date_now = new Date();
// check if the payment date is after today
if (date_queried > date_now) {
date_valid = ' false ';
} else {
date_valid = ' true ';
}
res.status(200).send(
{sessionInfo: {parameters: {date_valid: date_valid}}});
break;
// BEGIN lookupTransactions
case ' lookupTransactions ':
console.log(tag + ' was triggered . ');
// select a random retailer from the retailers array
let retailers = [
' Dior ', ' Walmart ', ' Target ', ' Costco ', ' Macy \ 's' , 'Bed Bath & Beyond' ,
'Amazon' , 'Walgreens' , 'Home Depot' , 'Best Buy' , 'Kohl\' s '
];
let randomRetail = Math.floor(Math.random() * retailers.length);
console.log(' random retail value ' + randomRetail);
let retailer_queried = retailers[randomRetail];
// Alter the transaction amount
let amount_queried =
Number(req.body.sessionInfo.parameters.amount_queried.amount);
let transaction_value = Number(amount_queried);
let randomAdjust = Math.floor(Math.random() * 5);
randomAdjust = Number(randomAdjust / 100);
let adjustment = Number(amount_queried * randomAdjust);
let randomMath = Math.floor(Math.random() * 1);
if (randomMath
transaction_value = Number(transaction_value - adjustment).toFixed(2);
} else if (randomMath = 1) {
transaction_value = Number(transaction_value + adjustment).toFixed(2);
}
if (amount_queried
transaction_found = ' true ';
} else {
transaction_found = ' false ';
}
res.status(200).send({
sessionInfo: {
parameters: {
retailer_queried: retailer_queried,
transaction_value: transaction_value,
transaction_found: transaction_found
}
}
});
break;
// BEGIN lookupCardFeatures
case ' lookupCardFeatures ':
console.log(tag + ' was triggered . ');
// setup arrays for card features
let interestRate = [
' 14.5 % APR ',
' 0 % APR in year 1 and then increases to 25 % APR in year 2 ',
' 10 % APR in year 1 and then increases to 20 % APR in year 2 ', ' 18 % APR '
];
let annualFee = [
' $ 0 annual fee for year 1 and then increases to $ 90 in year 2 ',
' $ 70 annual fee starting in year 1 ',
' $ 15 annual fee for year 1 and then increases to $ 80 in year 2 ',
' $ 50 annual fee starting in year 1 '
];
let cashBackRate = [' 1 % ', ' 3 % ', ' 6 % ', ' 2 % ', ' 5 % ', ' 4 % '];
let pointsBonus = [' 50 , 000 ', ' 25 , 000 ', ' 10 , 000 ', ' 100 , 000 ', ' 75 , 000 '];
// setup card one features
let cardOneRandomInterest =
Math.floor(Math.random() * interestRate.length);
let card_one_interest = interestRate[cardOneRandomInterest];
let cardOneRandomFee = Math.floor(Math.random() * annualFee.length);
let card_one_fee = annualFee[cardOneRandomFee];
let cardOneRandomCashback =
Math.floor(Math.random() * cashBackRate.length);
let card_one_cashback = cashBackRate[cardOneRandomCashback];
let cardOneRandomPoints =
Math.floor(Math.random() * pointsBonus.length);
let card_one_points = pointsBonus[cardOneRandomPoints];
// setup card two features
let cardTwoRandomInterest =
Math.floor(Math.random() * interestRate.length);
let card_two_interest = interestRate[cardTwoRandomInterest];
let cardTwoRandomFee = Math.floor(Math.random() * annualFee.length);
let card_two_fee = annualFee[cardTwoRandomFee];
let cardTwoRandomCashback =
Math.floor(Math.random() * cashBackRate.length);
let card_two_cashback = cashBackRate[cardTwoRandomCashback];
let cardTwoRandomPoints =
Math.floor(Math.random() * pointsBonus.length);
let card_two_points = pointsBonus[cardTwoRandomPoints];
res.status(200).send({
sessionInfo: {
parameters: {
card_one_interest: card_one_interest,
card_one_fee: card_one_fee,
card_one_cashback: card_one_cashback,
card_one_points: card_one_points,
card_two_interest: card_two_interest,
card_two_fee: card_two_fee,
card_two_cashback: card_two_cashback,
card_two_points: card_two_points
}
}
});
break;
default:
console.log(' default case called ' );
res . status ( 200 ). end ();
break ;
}
}
} ;
Healthcare agent
This template helps end-users check their claims, benefits,
and find a doctor.
Sample utterances
What is coinsurance?
Can you help me find a doctor?
I'm not feeling well.
What is my deductible?
Order and account management agent
This template helps end-users purchase or return
a product, track orders, and manage account settings, such as loyalty points,
addresses, and passwords.
Sample utterances
I haven't received my order, where is it?
I want to get a new phone.
I forgot my password.
Can you tell me how many points I have?
I moved and need to update my address.
Payment arrangement agent
This template helps end-users set up a two installment
payment arrangement or extend a payment due date.
Sample utterances
My account was suspended.
I won't get paid on time to pay my bill.
I need to extend my due date.
I lost my job due to covid-19.
Webhook
This Cloud Functions webhook performs the following actions:
Provides sample amount due and maximum extension dates.
Calculates the second payment installment based on the difference between
the total balance and the first payment installment paid.
Validates that the requested extension date does not surpass the maximum
extension date.
package.json
{
"name": "sample-http",
"version": "0.0.1",
"dependencies": {
"moment": "2.27.0"
}
}
index.js
const moment = require ( 'moment' );
function getRandomAmount ( min , max ) {
return Math . random () * ( max - min ) + min ;
}
function formatCurrency ( amount ) {
return Number ( amount ) . toFixed ( 2 );
}
function formatUserDate ( dateObject ) {
if ( ! dateObject ) {
console . log ( 'dateObject error. dateObject passed to formatUserDate is:' , dateObject );
console . log ( 'dateObject requires day, month, year properties:' );
// return false if the dates are not valid
// returning false prevents the if / else block from running , which causes the function to crash .
return false ;
}
console . log ( 'formatUserDate date set.' );
const { day , year , month } = dateObject ;
return ` $ { year } -$ { month } -$ { day } ` ;
}
/**
* Responds to any HTTP request .
*
* @ param { ! express : Request } req HTTP request context .
* @ param { ! express : Response } res HTTP response context .
*/
exports . cxPrebuiltAgentsPaymentArrangement = ( req , res ) => {
var tag = req . body . fulfillmentInfo . tag ;
var first_payment ;
var amount_due_1 ;
// var adjust_due_date ;
var max_date_1 ;
var maxDate1 ;
var max_date_2 ;
var maxDate2 ;
var current_due_date ;
var max_extension_date ;
var maxExtensionDate ;
var amount_due ;
var payment_amount_2 ;
var dateFromUser ;
var valid_payment ;
var valid_date ;
if ( !! tag ) {
switch ( tag ) {
// Initialize Dynamic parameters
case 'setDynamicParams' :
console . log ( tag + ' was triggered.' );
max_date_1 = moment () . add ( 15 , 'days' ) . calendar ();
max_date_2 = moment () . add ( 25 , 'days' ) . calendar ();
current_due_date = moment () . add ( 10 , 'days' ) . calendar ();
max_extension_date = moment () . add ( 30 , 'days' ) . calendar ();
amount_due = formatCurrency ( getRandomAmount ( 200 , 400 ));
res . status ( 200 ) . send ({
sessionInfo : {
parameters : {
max_date_1 : max_date_1 ,
max_date_2 : max_date_2 ,
current_due_date : current_due_date ,
max_extension_date : max_extension_date ,
amount_due : amount_due ,
}
}
});
break ;
// Initialize Static parameters
case 'setStaticParams' :
console . log ( tag + ' was triggered.' );
user_id = req . body . sessionInfo . parameters . user_id ;
if ( user_id == '1001' ) {
max_date_1 = "2021-01-15" ;
max_date_2 = "2021-01-30" ;
current_due_date = "2021-01-01" ;
max_extension_date = "2021-02-15" ;
amount_due = '225.00' ;
} else if ( user_id == '2002' ) {
max_date_1 = "2021-03-15" ;
max_date_2 = "2021-03-30" ;
current_due_date = "2021-03-01" ;
max_extension_date = "2021-04-15" ;
amount_due = '333.00' ;
} else if ( user_id == '3003' ) {
max_date_1 = "2021-05-15" ;
max_date_2 = "2021-05-30" ;
current_due_date = "2021-05-01" ;
max_extension_date = "2021-06-15" ;
amount_due = '189.00' ;
} else {
max_date_1 = moment () . add ( 15 , 'days' ) . calendar ();
max_date_2 = moment () . add ( 25 , 'days' ) . calendar ();
current_due_date = moment () . add ( 10 , 'days' ) . calendar ();
max_extension_date = moment () . add ( 30 , 'days' ) . calendar ();
amount_due = formatCurrency ( getRandomAmount ( 200 , 400 ));
}
res . status ( 200 ) . send ({
sessionInfo : {
parameters : {
max_date_1 : max_date_1 ,
max_date_2 : max_date_2 ,
current_due_date : current_due_date ,
max_extension_date : max_extension_date ,
amount_due : formatCurrency ( amount_due ),
}
}
});
break ;
// Automatically set second payment based on first payment amount
case 'secondPayment' :
console . log ( tag + ' was triggered.' );
first_payment = req . body . sessionInfo . parameters . payment_amount_1 . amount ;
amount_due_1 = req . body . sessionInfo . parameters . amount_due ;
payment_amount_2 = formatCurrency ( amount_due_1 - formatCurrency ( first_payment ));
res . status ( 200 ) . send ({
sessionInfo : {
parameters : {
payment_amount_2 : payment_amount_2
}
}
});
break ;
// BEGIN validatePayment
case 'validatePayment' :
console . log ( tag + ' was triggered.' );
first_payment = req . body . sessionInfo . parameters . payment_amount_1 . amount ;
amount_due_1 = req . body . sessionInfo . parameters . amount_due ;
if (( formatCurrency ( first_payment ) >= '100.00' ) && ( formatCurrency ( first_payment ) amount_due_1 )) {
valid_payment = "True" ;
} else {
valid_payment = "False"
}
res . status ( 200 ) . send ({
sessionInfo : {
parameters : {
valid_payment : valid_payment ,
}
}
});
break ;
// BEGIN validateDate
case 'validateDate' :
// Log when the cloud function for the validateDate tag is triggered
console . log ( tag + ' was triggered.' );
// Log ALL of the session parameters passed to the cloud function
console . log ( 'validateDate sessionInfo parameters' , req . body . sessionInfo . parameters );
// Log ONLY max_extension_date and adjust_due_date values from session parameters .
console . log ( 'sessionInfo >>> max_extension_date' , req . body . sessionInfo . parameters . max_extension_date );
console . log ( 'sessionInfo >>> adjust_due_date' , req . body . sessionInfo . parameters . adjust_due_date );
// If the formatUserDate function succeeds running , then the date will be a string formatted as yyyy - mm - dd .
// If the session params dateObject is not formatted correctly the formatUserDate function returns the boolean value false .
// formatUserDate returns false to prevent the Moment function from running ( see 3 conditions below ) .
dateFromUser = formatUserDate ( req . body . sessionInfo . parameters . adjust_due_date );
maxExtensionDate = req . body . sessionInfo . parameters . max_extension_date ;
// Set valid_date to false . We do this so the cloud function does not crash and always returns a value to Dialogflow CX
valid_date = "False"
// Only set valid_date to true when
// 1 ) dateFromUser is a date string and not set to false by the formatUserDate function
// 2 ) maxExtensionDate is string and not set to false by the formatUserDate function
// 3 ) if Moment determines the dateFromUser is before maxExtensionDate
if ( dateFromUser && maxExtensionDate && moment ( dateFromUser ) . isSameOrBefore ( maxExtensionDate )) {
valid_date = "True" ;
}
res . status ( 200 ) . send ({
sessionInfo : {
parameters : {
valid_date : valid_date ,
// You will see the debug property in the Dialogflow CX UI
// if formatUserDate failed for eitehr date you will
// see 'false' in the UI .
// Otherwise , you will see the string formatted date
debug : { dateFromUser , maxExtensionDate }
}
}
});
break ;
case 'validateDate1' :
// Log when the cloud function for the validateDate tag is triggered
console . log ( tag + ' was triggered.' );
// Log ALL of the session parameters passed to the cloud function
console . log ( 'validateDate sessionInfo parameters' , req . body . sessionInfo . parameters );
// Log ONLY max_date_1 and payment_date_1 values from session parameters .
console . log ( 'sessionInfo >>> max_date_1' , req . body . sessionInfo . parameters . max_date_1 );
console . log ( 'sessionInfo >>> payment_date_1' , req . body . sessionInfo . parameters . payment_date_1 );
// If the formatUserDate function succeeds running , then the date will be a string formatted as yyyy - mm - dd .
// If the session params dateObject is not fomatted correctly the formatUserDate function returns the boolean value false .
// formatUserDate returns false to prevent the Moment function from running ( see 3 conditions below ) .
dateFromUser = formatUserDate ( req . body . sessionInfo . parameters . payment_date_1 );
// maxExtensionDate = formatUserDate ( req . body . sessionInfo . parameters . max_extension_date );
maxDate1 = req . body . sessionInfo . parameters . max_date_1 ;
// Set valid_date to false . We do this so the cloud function does not crash and always returns a value to Dialogflow CX
valid_date = "False"
// Only set valid_date to true when
// 1 ) dateFromUser is a date string and not set to false by the formatUserDate function
// 2 ) maxExtensionDate is string and not set to false by the formatUserDate function
// 3 ) if Moment determines the dateFromUser is before maxExtensionDate
if ( dateFromUser && maxDate1 && moment ( dateFromUser ) . isSameOrBefore ( maxDate1 )) {
valid_date = "True" ;
}
res . status ( 200 ) . send ({
sessionInfo : {
parameters : {
valid_date : valid_date ,
// You will see the debug property in the Dialogflow CX UI
// if formatUserDate failed for eitehr date you will
// see 'false' in the UI .
// Otherwise , you will see the string formatted date
debug : { dateFromUser , maxDate1 }
}
}
});
break ;
case 'validateDate2' :
// Log when the cloud function for the validateDate tag is triggered
console . log ( tag + ' was triggered.' );
// Log ALL of the session parameters passed to the cloud function
console . log ( 'validateDate sessionInfo parameters' , req . body . sessionInfo . parameters );
// Log ONLY max_date_2 and payment_date_2 values from session parameters .
console . log ( 'sessionInfo >>> max_extension_date' , req . body . sessionInfo . parameters . max_date_2 );
console . log ( 'sessionInfo >>> adjust_due_date' , req . body . sessionInfo . parameters . payment_date_2 );
// If the formatUserDate function succeeds running , then the date will be a string formatted as yyyy - mm - dd .
// If the session params dateObject is not fomatted correctly the formatUserDate function returns the boolean value false .
// formatUserDate returns false to prevent the Moment function from running ( see 3 conditions below ) .
dateFromUser = formatUserDate ( req . body . sessionInfo . parameters . payment_date_2 );
// maxExtensionDate = formatUserDate ( req . body . sessionInfo . parameters . max_extension_date );
maxDate2 = req . body . sessionInfo . parameters . max_date_2 ;
// Set valid_date to false . We do this so the cloud function does not crash and always returns a value to Dialogflow CX
valid_date = "False"
// Only set valid_date to true when
// 1 ) dateFromUser is a date string and not set to false by the formatUserDate function
// 2 ) maxExtensionDate is string and not set to false by the formatUserDate function
// 3 ) if Moment determines the dateFromUser is before maxExtensionDate
if ( dateFromUser && maxDate2 && moment ( dateFromUser ) . isSameOrBefore ( maxDate2 )) {
valid_date = "True" ;
}
res . status ( 200 ) . send ({
sessionInfo : {
parameters : {
valid_date : valid_date ,
// You will see the debug property in the Dialogflow CX UI
// if formatUserDate failed for eitehr date you will
// see 'false' in the UI .
// Otherwise , you will see the string formatted date
debug : { dateFromUser , maxDate2 }
}
}
});
break ;
default :
break ;
}
}
};
Small talk agent
This template helps customize and personalize agents with simple
questions.
Sample utterances
What's up?
Who are you?
Today is my birthday.
Sorry.
What do you mean?
Telecommunications agent
This template helps end-users resolve billing and plan
questions, troubleshoot, and add travel and cruise plans.
Sample utterances
How can I save money on my bill?
My texts aren't going through.
How much more will I pay if I upgrade to Plan A?
I need data coverage for a trip I'm going on to Jamaica.
Webhook
The Cloud Functions webhook performs the following actions:
Compares plan costs based on a trip location and duration
Identifies billing anomalies based on an end-user's phone number
package.json
{
"name": "sample-http",
"version": "0.0.1",
"dependencies": {
"moment": "2.24.0"
}
}
helpers.js
// Get the current month , first day of current month and last month values
// based on today 's date
module . exports = {
get_date_details : function ( bill_state ) {
const monthNames = [ "January" , "February" , "March" , "April" , "May" , "June" ,
"July" , "August" , "September" , "October" , "November" , "December"
];
let today = new Date ()
let first_month_name = monthNames [ today . getMonth ()]
let firstDay = new Date ( today . getFullYear (), today . getMonth (), 1 );
let first_day_str = first_month_name + ' 0' + firstDay . getDate () + ', ' + firstDay . getFullYear ()
let last_month_name = monthNames [ today . getMonth () - 1 ]
let last_month_first_day_str = last_month_name + ' 0' + firstDay . getDate () + ', ' + firstDay . getFullYear ()
let second_last_month_name = monthNames [ today . getMonth () - 2 ]
if ( bill_state . toString () == 'current' ) {
return [ first_month_name , first_day_str , last_month_name ]
}
else {
return [ last_month_name , last_month_first_day_str , second_last_month_name ]
}
}
}
index.js
/**
* Responds to any HTTP request .
*
* @ param { ! express : Request } req HTTP request context .
* @ param { ! express : Response } res HTTP response context .
*/
const helpers = require ( './helpers.js' )
exports . cxPrebuiltAgentsTelecom = ( req , res ) => {
console . log ( 'Cloud Function:' , 'Invoked cloud function from Dialogflow CX' );
let tag = req . body . fulfillmentInfo . tag ;
if ( !! tag ) {
switch ( tag ) {
// BEGIN detectCustomerAnomaly
case 'detectCustomerAnomaly' :
console . log ( tag + ' was triggered.' );
let phone_number = req . body . sessionInfo . parameters . phone_number ;
let bill_month = req . body . sessionInfo . parameters . bill_state ;
let parameters = req . body . sessionInfo . parameters ;
let bill_amount ;
let product_line ;
let anomaly_detect = "false"
let purchase = "The Godfather"
let purchase_amount = 9.99
let total_bill_amount = 64.33
let bill_without_purchase = 54.34
let updated_parameters = {}
let [ month_name , first_of_month , last_month_name ] = helpers . get_date_details ( bill_month )
console . log ( month_name , first_of_month , last_month_name )
// Getting the month name based on the bill state - current or previous
// For example , if the current month is December , we get the values as
// December , December 1 st , November
// Only 999999 will have anomaly detection
if ( phone_number . toString () == '999999' ) {
anomaly_detect = "true"
product_line = "phone"
purchase = "device protection"
updated_parameters [ "product_line" ] = product_line
updated_parameters [ "bill_month" ] = month_name
updated_parameters [ "last_month" ] = last_month_name
}
// If bill hike amount is given - we just add it to the total bill
if ( 'bill_amount' in parameters ) {
bill_amount = parameters [ 'bill_amount' ]
purchase_amount = bill_amount [ 'amount' ]
total_bill_amount = 54.34 + purchase_amount
}
// Adding the updated session parameters to the new parameters json
updated_parameters [ "anomaly_detect" ] = anomaly_detect
updated_parameters [ "purchase" ] = purchase
updated_parameters [ "purchase_amount" ] = purchase_amount
updated_parameters [ "bill_without_purchase" ] = bill_without_purchase
updated_parameters [ "total_bill" ] = total_bill_amount
updated_parameters [ "first_month" ] = first_of_month
res . status ( 200 ) . send ({
sessionInfo : {
parameters : updated_parameters
}
});
break ;
// BEGIN validatePhoneLine
case 'validatePhoneLine' :
console . log ( tag + ' was triggered.' );
let phone = req . body . sessionInfo . parameters . phone_number ;
let phone_line_verified ;
let line_index ;
let domestic_coverage ;
let covered_lines =
[ '5555555555' , '5105105100' , '1231231234' , '9999999999' ];
// Loop over the covered lines array
covered_lines . forEach (( line , index ) => {
// For each phone line in the array , check if the last 4 digits are
// included in the string . when true , update the line_index variable
if ( line . includes ( phone )) {
line_index = index ;
console . log ( 'This is the index ' + line_index );
}
});
// Only 9999 will fail ;
if ( line_index === 3 ) {
phone_line_verified = 'false' ;
} else {
phone_line_verified = 'true' ;
}
// Only 1234 will have domestic coverage .
if ( line_index === 2 ) {
domestic_coverage = 'true' ;
} else {
domestic_coverage = 'false' ;
}
res . status ( 200 ) . send ({
sessionInfo : {
parameters : {
phone_line_verified : phone_line_verified ,
domestic_coverage : domestic_coverage
}
}
});
break ;
// BEGIN cruisePlanCoverage
case 'cruisePlanCoverage' :
console . log ( tag + ' was triggered.' );
let port = req . body . sessionInfo . parameters . destination ;
let port_is_covered ;
// Sample list of covered cruise ports .
let covered_ports = [
'mexico' ,
'canada' ,
'anguilla' ,
];
if ( covered_ports . includes ( port . toLowerCase ())) {
port_is_covered = 'true' ;
} else {
port_is_covered = 'false' ;
}
res . status ( 200 ) . send (
{ sessionInfo : { parameters : { port_is_covered : port_is_covered } } });
break ;
// BEGIN internationalCoverage
case 'internationalCoverage' :
console . log ( tag + ' was triggered.' );
let destination = req . body . sessionInfo . parameters . destination ;
let coverage ;
// Sample list of covered international monthly destinations .
let covered_by_monthly = [
'anguilla' ,
'australia' ,
'brazil' ,
'canada' ,
'chile' ,
'england' ,
'france' ,
'india' ,
'japan' ,
'mexico' ,
'russia' ,
'singapore' ,
];
// Sample list of covered international daily destinations .
let covered_by_daily = [
'anguilla' , 'australia' , 'brazil' , 'canada' , 'chile' , 'england' ,
'france' , 'india' , 'japan' , 'mexico' , 'singapore'
];
if ( covered_by_monthly . includes ( destination . toLowerCase ()) &&
covered_by_daily . includes ( destination . toLowerCase ())) {
coverage = 'both' ;
} else if (
covered_by_monthly . includes ( destination . toLowerCase ()) &&
! covered_by_daily . includes ( destination . toLowerCase ())) {
coverage = 'monthly_only' ;
} else if (
! covered_by_monthly . includes ( destination . toLowerCase ()) &&
! covered_by_daily . includes ( destination . toLowerCase ())) {
coverage = 'neither' ;
} else {
// This should never happen , because covered_by_daily is a subset of
// covered_by_monthly
coverage = 'daily_only' ;
}
res . status ( 200 ) . send ({ sessionInfo : { parameters : { coverage : coverage } } });
break ;
// BEGIN cheapestPlan
case 'cheapestPlan' :
console . log ( tag + ' was triggered.' );
let trip_duration = req . body . sessionInfo . parameters . trip_duration ;
let monthly_cost ;
let daily_cost ;
let suggested_plan ;
// Can only suggest cheapest if both are valid for location .
// When trip is longer than 30 days , calculate per - month cost ( example $
// amounts ) . Suggest monthly plan .
if ( trip_duration > 30 ) {
monthly_cost = ( Math . floor ( trip_duration / 30 )) * 70 ;
daily_cost = trip_duration * 10 ;
suggested_plan = 'monthly' ;
}
// When trip is 30 days , but greater than 6 days , calculate monthly
// plan cost and daily plan cost . Suggest monthly b / c it is the cheaper
// one .
else if ( trip_duration 30 && trip_duration > 6 ) {
monthly_cost = 70 ;
daily_cost = trip_duration * 10 ;
suggested_plan = 'monthly' ;
}
// When trip is 6 days , calculate daily plan cost . Suggest daily
// plan .
else if ( trip_duration 6 && trip_duration > 0 ) {
monthly_cost = ( Math . floor ( trip_duration / 30 )) * 70 ;
daily_cost = trip_duration * 10 ;
suggested_plan = 'daily' ;
} else {
// This should never happen b / c trip_duration would have to be
// negative
suggested_plan = 'null' ;
}
res . status ( 200 ) . send ({
sessionInfo : {
parameters : {
monthly_cost : monthly_cost ,
daily_cost : daily_cost ,
suggested_plan : suggested_plan
}
}
});
break ;
default :
console . log ( 'default case called' );
res . status ( 200 ) . end ();
break ;
}
}
};
Travel: baggage claim agent
This template helps end-users create or check the status of
a claim related to lost, delayed, or damage baggage.
Sample utterances
Can you help me file a claim for the bag you lost?
I'd like to know the status of my damaged bag claim.
When will my luggage arrive?
Webhook
This Cloud Functions webhook performs the following actions:
Verifies user and flight details.
Generates a claim ID and returns claim information.
package.json
{
"name": "sample-http",
"version": "0.0.1",
"dependencies": {
"moment": "2.27.0"
}
}
index.js
const moment = require ( 'moment' )
/**
* Responds to any HTTP request.
*
* @param {!express:Request} req HTTP request context.
* @param {!express:Response} res HTTP response context.
*/
exports . cxPrebuiltAgentsClaimStatus = ( req , res ) => {
let tag = req . body . fulfillmentInfo . tag ;
let passenger_last_name ;
if ( !! tag ) {
switch ( tag ) {
// Check Claim Status tag
// Validates that the claim ID is 'REF123456'
// And that the last name is 'Garcia'
// Sends back a static status message
case 'claimStatus' :
console . log ( tag + ' was triggered.' )
let claim_id = req . body . sessionInfo . parameters . claim_id ;
passenger_last_name = req . body . sessionInfo . parameters . passenger_last_name ;
let claim_status ;
if ( claim_id == 'REF123456' && passenger_last_name == "Garcia" ) {
claim_status = 'valid' ;
}
else {
claim_status = 'invalid' ;
}
let claim_status_message = 'Your lost bag claim is being processed and you should receive payment to your account ending in 6873 within 5-7 business days. '
res . status ( 200 ). send ( {
sessionInfo : {
parameters : {
claim_status : claim_status ,
claim_status_message : claim_status_message
}
}
} );
break ;
// Case to submit a new claim and generate a confirmation ID
// Validates that the flight number = AJ143 , last name = Garcia
// and reference id = 1234567890123
// Ideally you would include better logic , this is just an example of a working webhook
case 'submitClaim' :
console . log ( tag + ' was triggered.' )
// Currently not using these two parameters but just an example
let claim_type = req . body . sessionInfo . parameters . claim_type ;
let passenger_flight_date = req . body . sessionInfo . parameters . passenger_flight_date ;
// Calculate qualifying rebate amount for delayed bags
let rebate_amount = 0
if ( claim_type == 'delayed' ) {
let date_difference = Math . abs ( moment ( passenger_flight_date ). diff ( moment (), 'days' ));
// Cap the qualifying days at 5
let rebate_qual_days = Math . min ( date_difference , 5 )
// An example of giving $ 50 per day of delay
rebate_amount = rebate_qual_days * 50
}
// These parameters are being checked
let passenger_flight_number = req . body . sessionInfo . parameters . passenger_flight_number ;
passenger_last_name = req . body . sessionInfo . parameters . passenger_last_name ;
let passenger_reference_id = req . body . sessionInfo . parameters . passenger_reference_id ;
let claim_confirmation_id ;
if ( passenger_flight_number == 'AJ143' && passenger_last_name == 'Garcia' && passenger_reference_id == '1234567890123' ) {
claim_filed = true ;
// Generate random 6 digit number to return
const rand_id = Math . floor ( 100000 + Math . random () * 900000 )
claim_confirmation_id = 'REF' + rand_id . toString ()
} else {
claim_filed = false ;
}
res . status ( 200 ). send ( {
sessionInfo : {
parameters : {
claim_filed : claim_filed ,
claim_confirmation_id : claim_confirmation_id ,
rebate_amount : rebate_amount
}
}
} );
break ;
// This is the case to verify form parameters that get updated throughout the conversation
case 'verifyParameters' :
// Capture newly updated form parameters
console . log ( tag + ' was triggered.' )
let params = req . body . pageInfo . formInfo . parameterInfo
let paramToValidate = { name : '' , value : '' }
// Only validate the form parameter if it was just collected
for ( let param of params ) {
if ( param . justCollected == true ) {
console . log ( 'Received parameter: ' , param )
paramToValidate = param ;
}
}
// Validate Passenger Reference ID
// Must == '1234567890123' in order to continue
if ( paramToValidate . displayName == 'passenger_reference_id' ) {
if ( paramToValidate . value != '1234567890123' ) {
paramToValidate . state = 'INVALID'
} else {
paramToValidate . state = 'VALID'
}
}
// Validate Flight Date
// Must be on or before current date
if ( paramToValidate . displayName == 'passenger_flight_date' ) {
let flight_date = paramToValidate . value
let now = moment ()
if (( moment ( flight_date ) now )) {
paramToValidate . state = 'VALID'
} else {
paramToValidate . state = 'INVALID'
}
}
res . status ( 200 ). send ( {
pageInfo : {
formInfo : {
parameterInfo : [ paramToValidate ]
}
}
} );
break ;
default :
break ;
}
}
} ;
Travel: car rental agent
This template helps end-users start a new car rental
reservation.
Sample utterances
I need to reserve a van.
Hi, I'm traveling to LA for the weekend and I need to rent a car while I'm
down there.
I need help booking an SUV.
Travel: flight information agent
This template helps end-users book and change tickets,
find flight information, and request a refund.
Sample utterances
My flight XX4597 needs to be changed. Can you help me?
Can you help me find out the new departure time for my flight.
What about the credit on my account from my cancelled flight?
Can you book my flight to San Francisco next month?
Book SFO 10am to MIA on August 10th, 2020 one way.
Previous
arrow_back
Travel
Next
Playbooks
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
