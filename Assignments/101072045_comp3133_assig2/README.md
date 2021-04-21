## Assignment 02 Features & Things to Note

- The Application Logs The Following:
  - Server Startup
  - Database Connection
  - All API Calls
  - All Error Messages

**A Log Folder and Log File is created for you at startup**

- The Application will output to the console the directory name where you can find the directory and its content
  - will look something like _pathToApplication/helpers/logFiles/logFile.txt_
  - once a log file reaches 5MB in size, a new one will be created
    - naming convention for log files is as follows: _logFile.txt_ , _logFile1.txt_ , _logFile2.txt_ , _etc_

### Features

- Login & Authentication using Auth0

  - this allows for SSN, OAuth with Google, or Create your own account.
  - **A default account has been provided for you and can be found in the console output upon startup**
    - _its also provided in the applications home page, just in case_

- Profile Page which displays basic profile information

  - The profile that has been provided can be updated through Google.
  - Once updated, the application will show the updated information

- All CRUD and Filter/Search Operations Are Supported
- Provides a refresh method to let you get up-to-date data

- A secondary, albeit small, API has also been provided that uses JWT for authenticating requests
