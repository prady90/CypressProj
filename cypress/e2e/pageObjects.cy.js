class pageObjects{


    signOnIframe={
        signOnPopUp : 'iframe[role="presentation"]',
        signOnPopUp_NoThanksBtn : 'button.M6CB1c.rr4y5c',
    }

    navigationURLs = {

        googleHomePageURL: 'https://www.google.com',
        timeOutNYCURL : 'https://www.timeout.com/newyork/things-to-do/the-best-hiking-near-nyc'
    
    }

}

module.exports = new pageObjects();