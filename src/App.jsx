import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "./components/form";
import Navbar__comp from "./components/Navbar";
import Asidebar from "./components/aside";
import TableComp from "./components/table/container.jsx";
import { useDispatch } from "react-redux";
import { addDataEntry } from "./redux/reducer/dataslice.js";

const App = () => {

  const dispatch = useDispatch()

  const validationSchema = yup.object().shape({
    first__name: yup
      .string()
      .required("نام اجباری است")
      .matches(/^[\u0600-\u06FF\s]+$/, "نام باید تنها شامل حروف فارسی باشد"),
    last__name: yup
      .string()
      .required("نام خانوادگی اجباری است")
      .matches(/^[\u0600-\u06FF\s]+$/, "نام خانوادگی باید تنها شامل حروف فارسی باشد"),
    Province: yup.object().required("استان اجباری است"),
    city: yup.object().required("شهر اجباری است"),
    postal_code: yup
      .string()
      .required("کد پستی اجباری است")
      .matches(/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد"),
    resume: yup.string().required("رزومه اجباری است"),
    date: yup.string().required("تاریخ اجباری است"),
    idType: yup.string().oneOf(["national", "economic"]).required(),
    idNumber: yup.string()
      .when("idType", {
        is: "national",
        then: (schema) => schema
          .required("کد ملی الزامی است")
          .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
      })
      .when("idType", {
        is: "economic",
        then: (schema) => schema
          .required("شناسه اقتصادی الزامی است")
          .matches(/^\d{12}$/, "شناسه اقتصادی باید ۱۲ رقم باشد")
      }),

    full_time_job: yup.boolean(),
    part_time_job: yup.boolean(),
    checkboxes: yup.mixed().test(
      'atLeastOne',
      'حداقل یکی از موارد باید انتخاب شود',
      function (value) {
        const { part_time_job, full_time_job } = this.parent;
        return part_time_job || full_time_job;
      }
    ),

  });

  const { control, reset, handleSubmit, setValue, getValues, watch ,clearErrors, formState: { errors } } = useForm({
    defaultValues: {
      first__name: "",
      last__name: "",
      Province: null,
      city: null,
      postal_code: "",
      full_time_job: false,
      part_time_job: false,
      resume: "",
      date: undefined,
      idType: "national",
      idNumber: ""
    },
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    dispatch(addDataEntry(data)); // ارسال داده به Redux
    reset();
  };

  const [data, setData] = useState(JSON.parse(localStorage.getItem("formData")) || []);

  return (
    <>
      <Navbar__comp />
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Asidebar />
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form
              Controller={Controller}
              control={control}
              watch={watch}
              setValue={setValue}
              getValues={getValues}
              errors={errors}
              clearErrors={clearErrors}
            />
          </form>
          <TableComp data={data} setData={setData} />
        </div>
      </div>
    </>
  );
};

export default App;