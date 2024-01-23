import Card from "./Card/Card.componenet";
const CardList = ({ monsters }) => (
  <section className="py-16">
    <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {monsters.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  </section>
);
export default CardList;
