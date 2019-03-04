import React, {Component} from 'react';

class AuthComponent extends Component {
    componentDidMount() {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '',
                cookie: true,
                xfbml: true,
                version: 'v.1.0'
            });

            window.FB.subscribe('auth.statusChange', (response) => {
                if (response.atuhResponse) {
                    this.updateLoggedInState(response)
                } else {
                    this.updateLoggedOutState()
                }
            });
        }.bind(this);

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement("script");
            js.setAttribute("src","//connect.facebook.net/en_US/sdk.js");
            js.setAttribute("type","text/javascript");
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }
    render(){
        return (
            <b> hey, bitch</b>
        )
    }
}

export default AuthComponent
