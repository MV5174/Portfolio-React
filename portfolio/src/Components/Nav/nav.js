import React from "react";
import "./styles.css"

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#">Michael Vega</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">About<span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Portfolio</a>
                        <a class="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;