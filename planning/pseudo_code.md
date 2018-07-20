# Growthsphere - Pseudo Code

1. Users opens web application

    1. Homepage prompts user to sign up
        1. User signs in, is led to user page

2. If skipped, prompts user to create an account.
    1. User fills in necessary account information
    2. User is prompted to fill in profile information (aka Hair Stats)
    3. User completes profile information and is taken to User profile page

3. User Profile Page: user option is to click either Menu button or View Regimen's button
    1. User click ___view regimen___
        1. User is prompted to fill out form with necesssary information
            1. Form sent to database, through which the controller applies the model through which the information shall be organized by
            2. Information is later retrived by server, through which the controller applies the view through which the User will see the information customized

4. User is redirected back to ```regimens``` page with recently created form shown

5. User has option to create new regimen, view current regimen, or edit/delete current regimens.
