## Description
A basic expo (non-ejected) app. It has basic login enabled so you can login with email and password. Hopefully will add more flows as time goes on.

When a user successfully logs in or signs up, the action
`LOGIN_USER` is fired with the payload as the firebaseUser object.
When a user logs out `LOGOUT_USER` action is fired.

You need to add the code to handle it either as a saga or a reducer.

## Setup

```
cp configs.js.sample configs.js
```

fill in the necessary details from the firebase project that you created.

## Important notes
1. The API key is the web API key
2. This uses the web APIs so make sure you read the proper documentation.
