import React from "react";
import { useField } from "formik";
import style from "../../Screens/Home/HomePage.module.css";

const CustomInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(field,meta);
  return (
    <div>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={`${style.errorMessage}  `}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
