# README

## Nodemailer notes

To use nodemailer you need to enable **lesssecureapps** for the email account.

You’ll need to have **two-step verification** enabled on your Gmail account before generating an App Password. If you haven’t enabled it, do so first by going to your Google Account settings.

1. Access Your Google Account:
2. Start by visiting the Google Account management page. You can do this by navigating to [https://myaccount.google.com/](https://myaccount.google.com/).
3. **Sign In**: Sign in to the Google Account associated with the Gmail address you want to use for sending emails programmatically.
4. **Security**: In the left sidebar, click on “Security.”
5. Scroll down to How you sign in to google and click on 2-step verificaiton.
6. **App Passwords:** Scroll down to “App passwords.” Click on “App passwords.” You may be prompted to re-enter your password for security purposes.
7. **App name**: Enter a custom name for this App Password. It helps you identify it later, so choose something related to the application or use case where you plan to use this App Password.
8. **Create**: Click the “Create” button. Google will create a unique 16-character App Password for your custom application/device.

## How to start

> NOTE: Environmental variables EMAIL refers to the sender email and APP_PASSWORD - to 16 character code from Google

```sh
# copy config example
cp .env.example .env
# configure .env
vim .env
# update the environment
source .env
```
