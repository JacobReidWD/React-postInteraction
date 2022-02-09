import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'ejs';

function renderTextBox() {
    class CrudDivs extends React.Component {

        renderCrudDiv() {
            console.log('clicked')
            return (
                React.createElement(
                    "div",
                    { className: "crud-card" },
                    "NewDiv",
                )
            )
        }

        render() {

            return (

                <div className="crud-container">
                    <div className="btnContainer" >
                        <button className="makeDivsBtn" onClick={this.renderCrudDiv}>
                            Create Divs
                        </button>
                    </div>
                </div> // container end 

            )

        }
    }

    ReactDOM.render(< CrudDivs />, document.getElementById('root'));

};
export default renderTextBox;