import React, { useReducer } from 'react'

const initialstate = {
  showtitle: true,
  focusedButton:null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FOCUS":
      return { ...state, focusedButton: action.payload };
    case "UNFOCUS":
      return { ...state, focusedButton: null };
    case "show":
      return { ...state,showtitle:false};
      case "hide":
        return{...state,showtitle:true};
    default:
      return state;
  }
};
const Trainer = () => {
  //-
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
       <div className="flex flex-col w-full pb-5 border-y-[1px] border-slate-300 gap-3 h-full items-center justify-center">
        <h1 className="font-semibold text-3xl">Men's Shoes & Footwear</h1>
        <p
          className="w-4/6 justify-center flex flex-shrink "
          onClick={() => {
          state.showtitle?dispatch({type:"show"}):dispatch({type:"hide"});
          }}
        >
          Kick back and get ready for a shoe-drobe reboot with our men’s
          footwear edit.
          <span className={state.showtitle && `hidden`}>
            Scroll men’s shoes that’ll have your ‘fit sorted from the bottom up,
            or let your feet do the talking with men’s casual shoes from adidas
            Originals and gain some serious style credentials in on-trend colour
            combos and fabrics. Not enough flex for you? Lace-up with trainers
            from New Balance – we’re talking the OG 550s and 530s (IYKYK).
            Whether it’s chelsea boots or loafers you’re after, elevate your
            smart-casj looks with men’s going-out shoes from ASOS DESIGN or get
            down to business with men’s work shoes that will have the whole
            office talking. Now, where's the checkout?
          </span>
        </p>
      </div>
    </div>
  )
}

export default Trainer
