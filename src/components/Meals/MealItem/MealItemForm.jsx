import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <Input
        /**
         * the below are being distributed
         * thru {...props.input} syntax
         */
        type="text"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
