// import {FormData} from '../types'
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  useForm,
  Controller,
  useFieldArray,
  SubmitHandler,
} from "react-hook-form";
import simulatedApi from "../api/api";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "You must be atleast 18 years old"),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender is required",
  }),
  address: z.object({
    city: z.string().min(1, "city is require"),
    state: z.string().min(1, "State is required"),
  }),
  hobbies: z
    .array(
      z.object({
        name: z.string().min(1, "Hobby name is required"),
      })
    )
    .min(1, "Atleast one hobby is required"),
  startDate: z.date(),
  subscribe: z.boolean(),
  referral: z.string().default(""),
});

type FormData = z.infer<typeof formSchema>;

const FormZod: React.FC = () => {
  const {
    register,
    control,
    getValues,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 18,
      gender: undefined,
      address: { city: "", state: "" },
      hobbies: [{ name: "" }],
      startDate: new Date(),
      subscribe: false,
      referral: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await simulatedApi(data);
      console.log("Success", response);
    } catch (error: any) {
      console.error("Error", error);
      setError("root", {
        message: error.message,
      });
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>First Name :</label>
            <input className="" {...register("firstName")} />
            {errors.firstName && <p> {errors.firstName.message} </p>}
          </div>

          <div className="form-group">
            <label>Last Name :</label>
            <input className="" {...register("lastName")} />
            {errors.lastName && <p> {errors.lastName.message} </p>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input className="" {...register("email")} />
            {errors.email && <p> {errors.email.message} </p>}
          </div>

          <div className="form-group">
            <label>Age :</label>
            <input className="" {...register("age", { valueAsNumber: true })} />
            {errors.age && <p> {errors.age.message} </p>}
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select {...register("gender")}>
              <option value="">Select Gender...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p> {errors.gender.message} </p>}
          </div>

          <div className="form-group">
            <label>Address :</label>
            <input
              className="mb-1"
              placeholder="city"
              {...register("address.city")}
            />
            {errors.address?.city && <p> {errors.address?.city.message} </p>}

            <input
              className=""
              placeholder="state"
              {...register("address.state")}
            />
            {errors.address?.state && <p> {errors.address?.state.message} </p>}
          </div>

          <div className="form-group">
            <label>Start Date :</label>
            <Controller
              control={control}
              name="startDate"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select Date"
                  selected={field.value}
                  onChange={(date: Date | null) => field.onChange(date)}
                />
              )}
            />
          </div>

          <div className="form-group">
            <label>Hobbies :</label>

            {fields.map((hobby, index) => (
              <div className="hobby-box" key={hobby.id}>
                <input
                  className="mb-1"
                  placeholder="Hobby Name"
                  {...register(`hobbies.${index}.name`)}
                />
                {errors.hobbies?.[index]?.name && (
                  <p> {errors.hobbies[index].name.message} </p>
                )}

                {fields.length > 1 && (
                  <button
                    className="remove-btn"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            <button type="button" onClick={() => append({ name: "" })}>
              Add
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="sub">Subscribe to Newsletter:</label>
            <input className="" type="checkbox" {...register("subscribe")} />
          </div>

          {getValues("subscribe") && (
            <div className="form-group">
              <label>Referral Source</label>
              <input
                className=""
                placeholder="How did you hear about us?"
                {...register("referral")}
              />
              {errors.referral && <p> {errors.referral.message} </p>}
            </div>
          )}

          {/* errors.root for server side rendering when like to API fail */}
          {errors.root && <p> {errors.root.message} </p>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormZod;
