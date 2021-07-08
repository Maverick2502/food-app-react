import { useRef } from "react";
import classes from "./Checkout.module.css";

function Checkout(props) {
  const nameInPutRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInPutRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    console.log(enteredCity);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          className={classes.input}
          type="text"
          id="name"
          ref={nameInPutRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          className={classes.input}
          type="text"
          id="street"
          ref={streetInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          className={classes.input}
          type="text"
          id="postal"
          ref={postalInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          className={classes.input}
          type="text"
          id="city"
          ref={cityInputRef}
        />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
