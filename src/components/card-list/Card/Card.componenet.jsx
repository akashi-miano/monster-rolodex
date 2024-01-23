const Card = ({ name, email, id }) => (
  <div
    className="card rounded-lg bg-cyan-400 flow-content--m p-4 hover:scale-105 hover:cursor-pointer duration-300"
    key={id}
  >
    <img
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
      alt={`monster ${name}`}
      className="mx-auto"
    />
    <h2 className="text-zinc-900 text-3xl font-medium">{name}</h2>
    <span className="text-lg">{email}</span>
  </div>
);

export default Card;
