export const ReviewsList = ({ reviews }) => {
  console.log(reviews);
  return (
    <ul className="flex-col">
      {reviews.map((x) => (
        <li
          key={x.id}
          className="flex-col mb-5 gap-10 bg-blue-50 rounded-xl truncate border-solid border-2 border-black-200 p-10"
        >
          <h4 className="m-5">{x.author} :</h4>
          <p className="text-wrap border-solid border-2 border-slate-300 p-10 rounded-3xl bg-red-50">
            {x.content}
          </p>
        </li>
      ))}
    </ul>
  );
};
