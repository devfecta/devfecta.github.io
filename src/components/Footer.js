import React, { Component } from 'react';

class Footer extends Component {

    constructor() {
        super();
        this.currentDate = Date.now();
        this.currentYear = new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(this.currentDate);
    }

    render() {
        return (
            <footer className="footer text-light text-center">
                <span className="container">&copy; {this.currentYear} DevFecta, LLC</span>
            </footer>
        );
    }
}

export default Footer;