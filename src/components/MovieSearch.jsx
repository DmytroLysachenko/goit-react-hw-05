import { Field, Form, Formik } from "formik";

export const MovieSearch = ({ handleSubmit }) => {
  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field
          name="query"
          type="text"
          placeholder="Movie name"
          className="input input-bordered w-full max-w-xs "
        />
        <button
          className="btn btn-outline btn-info border border-solid border-indigo-300 ml-10"
          type="submit"
        >
          Search
        </button>
      </Form>
    </Formik>
  );
};
