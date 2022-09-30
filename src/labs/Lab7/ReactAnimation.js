import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./ReactAnimation.css"

export default function ReactAnimation() {
    const [cards, setCards] = useState([]);

    //onmount
    useEffect(() => {
        //generate cards
        let suits = ["A", "B", "C"];

        let genCards = suits.flatMap((suit) => {
            return [1, 2, 3, 4, 5, 6, 7].map((val) => {
                return { val: suit + val, active: true };
            });
        })

        setCards(genCards);
    }, []);

    //render stuff
    let cardEls = cards.map((card, ind) => {
        let delay = ind * 200;
        return (
            <CSSTransition 
                key={card.val} 
                appear={true}
                in={true} 
                timeout={{ enter: delay, exit: 400 }} 
                classNames="card">
            <div 
            className="card" 
            style={{transitionDelay: `${delay}ms`}}
            onClick={() => {
                cards[ind].active = false;
                setCards([...cards]);
                console.log(cards[ind].active)
            }}>
                {card.val}
                </div>
            </CSSTransition>
        );
        
    });

    return <div>
        <div className="cardStack">{cardEls}</div>
        </div>;
}