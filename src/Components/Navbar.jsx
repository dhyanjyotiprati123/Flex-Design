import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <figure>
                <img className="main-logo" src="../img/logo.png" alt="logo"/>
            </figure>

            <form action="#" className="search">
                <input type="text" className="search-input" placeholder="Search hotels, flights, car rentels" />
                <button className="search-button">
                    <svg className="search-icon">
                        <use xlinkHref="SVGS/sprite.svg#icon-magnifying-glass" />
                    </svg>
                </button>
            </form>

            <nav className="navigation">
                <div className="navigation-bookmark">
                    <svg className="navigation-bookmark-icon">
                       <use xlinkHref="SVGS/sprite.svg#icon-bookmark" />
                    </svg>
                    <span className="navigation-notification">7</span>
                </div>

                <div className="navigation-chat">
                    <svg className="navigation-chat-icon">
                       <use xlinkHref="SVGS/sprite.svg#icon-chat" />
                    </svg>
                    <span className="navigation-notification">13</span>
                </div>

                <div className="navigation-user">
                    <figure className="navigation-fig">
                        <img className="navigation-user-photo" src="../img/user-6.jpg" alt="user" />
                    </figure>
                    <h4 className="navigation-user-name">Prati</h4>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
