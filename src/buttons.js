import { colord } from 'colord';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const PopComment = ({ idMessage }) => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(null);
    const [textColor, setTextColor] = useState('black');
    const [btnColor, setBtnColor] = useState("white");
    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                type="button"
                className="buttons"
                data-toggle="modal"
                data-target={`#${idMessage}`}
                style={{
                    backgroundColor: btnColor,
                    color: textColor,
                    borderRadius: '20%'
                }}
            >
                Comment
            </button>
            {open && (
                <div
                    className="modal fade"
                    id={idMessage}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <input
                        type='text'></input>
                    <a href="https://www.google.com"><button>Post</button></a>
                </div>
            )}
        </>
    );
};

const PopLike = ({ idMessage }) => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(223);
    const [textColor, setTextColor] = useState('black');
    const [btnColor, setBtnColor] = useState("white");
    return (
        <>
            <button
                onClick={() => {
                    textColor === "black" ? setTextColor("white") : setTextColor("black")
                    btnColor === "white" ? setBtnColor("blue") : setBtnColor("white")
                    count === 223 ? setCount(count + 1) : setCount(count - 1);
                    setOpen(!open)
                }}
                style={{
                    backgroundColor: btnColor,
                    color: textColor,
                    borderRadius: '20%'
                }}
                type="button"
                className="buttons"
                data-toggle="modal"
                data-target={`#${idMessage}`}
            >
                Like
            </button>
            <ul><li><p className='count'>{count} Likes</p></li></ul>
            {
                open && (
                    <div
                        className="modal fade"
                        id={idMessage}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                    </div>
                )
            }
        </>
    );
};



function Buttons() {
    var message = 'You sure?';
    const [count, setCount] = useState(null);
    const [textColor, setTextColor] = useState('black');
    const [btnColor, setBtnColor] = useState("white");
    return (
        <>
            <div className="buttons">
                <ul>
                    <li><PopLike /></li>
                    <li><button onClick={() => {
                        alert(message);
                    }}
                        style={{
                            backgroundColor: btnColor,
                            color: textColor,
                            borderRadius: '20%'
                        }}>Share</button></li>
                    <li><PopComment /></li>
                </ul>
            </div>
        </>
    );
};
export default Buttons;