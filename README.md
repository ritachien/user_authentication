# User Authentication  
A simple log in page developed by Express.js.  
Using cookies to manage log-in status.

![Demo](/Demo.png)

## Features  
**Home**  
- Check log-in status by cookies.
- If log-in, show welcome message and `log-out` button.
- If not yet log-in, ask to log-in and show `log-in` button.

**Log-in**  
- Check if user input matches log in data.  
- Show error message if email or password wrong.  
- If authenticated, generate cookie with sessionID and redirect to home page.  

**Log-out**  
- Clear cookie with sessionID.
- Delete user sessionID in Session collections.  

## Built With  
* Node.js @16.14.2
* Express.js @4.17.3 - The web framework used
* express-handlebars @6.0.5 - View engine for Express
* cookie-parser @1.4.6

## Authors
* [**Rita Chien**](https://github.com/ritachien)
